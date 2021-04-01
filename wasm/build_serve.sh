#!/bin/sh

set -ex

wasm-pack build --target web
simple-http-server

