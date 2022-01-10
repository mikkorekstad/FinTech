import yfinance as yf
import datetime
# import streamlit as st
# import requests
# import pandas as pd

ticker = "VIX"

current_datetime = datetime.datetime.now()
start = current_datetime - datetime.timedelta(days=30)
end = current_datetime - datetime.timedelta(days=1)
vix = yf.Ticker(f"^{ticker}")
data = vix.history(start=start.strftime("%Y-%m-%d"), end=end.strftime("%Y-%m-%d"))
