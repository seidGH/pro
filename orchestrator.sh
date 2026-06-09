#!/bin/bash
# Path: ~/pro/orchestrator.sh

case "$1" in
  front)
    bash orchestrator/deploy_frontend.sh
    ;;
  back)
    bash orchestrator/deploy_backend.sh
    ;;
  *)
    echo "Usage: ./orchestrator.sh [front|back]"
    exit 1
    ;;
esac
