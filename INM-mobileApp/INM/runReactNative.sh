#!/bin/bash

source ../../venv/bin/activate
pip install quart

npm run ios &
npm run dev
