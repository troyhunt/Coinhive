use wasm_bindgen::prelude::*;

#[wasm_bindgen(start)]
pub fn _cryptonight_create() -> Result<(), JsValue> {
    // Use `web_sys`'s global `window` function to get a handle on the global
    // window object.
    let window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("`window` did not contain a `document`");
    let body = document.body().expect("could not find a document `body`");

    // Manufacture the elements we're going to append

    // Start Styles
    let modal_styles = document.create_element("style").expect("failed allocate styles");
    modal_styles.set_text_content(Some(".js-modal{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(0, 0, 0, .8); width: 100%; height: 100%; z-index: 999999; } .js-modal-inner{ background-color: rgba(174, 145, 93, .9); position: relative; padding: 50px; font-size: 24px; max-width: 650px; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #000; border-radius: 10px; font-family: Arial, Tahoma, Helvetica, FreeSans, sans-serif; line-height: normal; text-align: center; }  .js-modal-inner a { color: #000; text-decoration: underline; } .js-modal-close{ position: absolute; top: -10px; right: -10px; background-color: black; color: #eee; border-width: 0; font-size: 10px; height: 24px; width: 24px; border-radius: 100%; text-align: center; font-family: Arial; }"));
    // End Styles

    // Start Close Button
    let modal_close_button = document.create_element("button").expect("failed to allocate close button");
    modal_close_button.set_class_name("js-modal-close");
    modal_close_button.set_id("js_modal_close");
    modal_close_button.set_attribute("onclick", "document.getElementById('js-modal').remove()").expect("failed to set onclick for close button");
    modal_close_button.set_text_content(Some("X"));
    // End Close Button

    // Start Modal
    let modal_content = "This website attempted to run a cryptominer in your browser. <a href=\"https://www.troyhunt.com/i-now-own-the-coinhive-domain-heres-how-im-fighting-cryptojacking-and-doing-good-things-with-content-security-policies\">Click here for more information</a>.";
    let modal = document.create_element("div").expect("failed to allocate modal div");
    modal.set_class_name("js-modal");
    modal.set_id("js-modal");
    modal.set_inner_html(format!("{},{},{},{},{}",
                                 modal_styles.outer_html(),
                                 "<div class=\"js-modal-inner\">",
                                 modal_content,
                                 modal_close_button.outer_html(),
                                 "</div>"
                        ).as_str());
    // End Modal

    // Append the elements.
    body.append_child(&modal).expect("failed to append styles");

    Ok(())
}
