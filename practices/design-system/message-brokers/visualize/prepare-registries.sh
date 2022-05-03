#!/bin/bash

# fail on error
set -e

cd __npm-registry__

npm pack ../../../../../lib/react-packages

