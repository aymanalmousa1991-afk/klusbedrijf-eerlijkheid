#!/usr/bin/env bash
# Render start script
cd /opt/render/project/src/backend
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port $PORT
