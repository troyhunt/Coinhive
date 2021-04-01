# WASM Modal Override Module for CoinHive Miner

To compile this yourself you will need to:
1. Install Rust, use [rustup](https://rustup.rs)
2. Install support for the correct target, in this case just run `rustup target add wasm32-unknown-unknown`
3. Install wasm-pack by running `cargo install wasm-pack`
4. If you intend to test also install simple-http-server: `cargo install simple-http-server`
5. Change directory to the `wasm` folder of this project and run: `wasm-pack --target web`
6. The `coinhive_modal.wasm` file will be located at `pkg/coinhive_modal.wasm`
7. You will probably want to strip this file as it is huge. Use the [Web Assembly Binary Toolkit](https://github.com/WebAssembly/wabt) `wasm-strip` utility. (This is available in most Linux package managers, they also have [release binaries](https://github.com/WebAssembly/wabt/releases/tag/1.0.23)).
