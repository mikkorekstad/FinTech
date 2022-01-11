import pandas as pd
import yfinance as yf
import datetime
from pandas import DataFrame
# import streamlit as st
# import requests
# import pandas as pd


class Scraper:
    def __init__(self, ticker="VIX", n_days=30):
        self.ticker = yf.Ticker(f"^{ticker}")
        self.historic_data = self.get_historic_data(n_days)

    def get_historic_data(self, n_days=30):
        current_datetime = datetime.datetime.now()
        start = current_datetime - datetime.timedelta(days=n_days)
        end = current_datetime - datetime.timedelta(days=1)
        data = self.ticker.history(start=start.strftime("%Y-%m-%d"), end=end.strftime("%Y-%m-%d"))
        data.drop(labels=["Volume", "Dividends", "Stock Splits"], axis=1, inplace=True)
        if data.shape[0] < 15:
            raise RuntimeError('Not enough data, we need at least 15 days worth!')
        return pd.DataFrame(data)

    def get_extreme_value(self, col, method):
        """Expected col is either Open, High, Low or Close"""
        return eval(f"self.historic_data['{col}'].{method}()")

    def get_current_data(self):
        return self.ticker.info.get("regularMarketPrice")

    def get_current_val(self, col):
        return self.historic_data[col].iloc[-1]

    def recommendation(self):
        current_price = self.get_current_data()
        open_today = self.get_current_val("Open")
        low = self.get_extreme_value("Low", "min")
        high = self.get_extreme_value("High", "max")

        new_low = (current_price < low)
        new_high = (current_price > high)
        up_today = (current_price > open_today)

        if up_today and new_low:
            sell = True
        else:
            sell = False

        if not up_today and new_high:
            buy = True
        else:
            buy = False

        return f'Recommendations: \n{buy=} \n {sell=}'
        #return f'{current_price=} \n {open_today=}'

