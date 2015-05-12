For Web developers / Designers / Translators

Each localized version of weusecoins is independent of each other and use static HTML file built using jekyll.

That allows us to adapt anything to best fit each languages requirements and available resources, businesses or active groups. That includes the html, fonts, css, scripts, social networks, etc. And that allows us to update other languages when a translator is missing for a specific language.

The materials directory is used as a shared directory to store files that take more disk space, such as the weusecoins video. 

# Requirements

Installing dependencies

    sudo apt-get install jekyll

# Usage

* update DOWNLOAD\_VERSION in _config.yml
* run jekyll
* output will be in \_site/

# Translation

1. Begin, Run ./_contrib/translate (ISO 639-1 language code) (language name) to create your language. Ex : ./_contrib/translate fr "Français"
2. Texts, Open .html files in the appropriate folder and in _layouts and translate all human readable english dialogs (without touching the html tags and the page id).
3. Links, Update the name of each .html file so that it reflects your language, and update the links in the .html files accordingly.
4. Sitemap, Add links to your translated pages in _config.yml under their equivalent english version.
5. Images, Update the few images that contain text with some editing software such as Gimp. You might also need to resize some buttons.
6. Social, Specific contents or integrations that make no sense in your language, such as StackExchange, twitter or else. You can choose to keep them with a notice saying that these ressources are not translated, or you can remove, or replace them by whatever you believe will be appropriate as a replacement.
7. Languages, Make sure that the languages are listed in alphabetical order in _config.yml
8. Contact, Make sure you state on appropriate contexts that emails sent to info@weusecoins.com must be in english.
9. Contributor, You are allowed to put your name and a link in the team page, at the end of the existing list of contributors.

* A tips for translators, you can preview your work in a simple Google chrome browser with no HTTP server. Just go to the existing english page, open the javascript console with CTRL + SHIFT + J and use the following command to make the page editable : document.body.contentEditable=true

# What not to do

For obvious reasons, you should not change the meaning of any text and you are not allowed to add or change links. Such changes must be discussed first.
You are however allowed to add links to community or news websites in the community section that might be appropriate for each language.

# Keep the same html structure

Keep html structure as symetric and perfectly identical as possible between each pages, and each localized version. This should not prevent you to add unique things for some languages. But you can keep the rest exactly as it is.
