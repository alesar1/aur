# Maintainer: swearchnick <swearchnick[at]gmail[dot]com>
pkgname="pdf-xchange"
pkgver="7.0.325.1"
pkgrel="1"
pkgdesc="Feature-rich PDF editor/viewer. Create, view, edit and annotate plus much more."
license=('Custom')
arch=('x86_64')
depends=('wine' 'hicolor-icon-theme')
makedepends=('p7zip' 'icoutils' 'gendesk')
url="http://www.tracker-software.com/product/pdf-xchange-editor"
_downloadsource="http://www.tracker-software.com/downloads"
_x86file="EditorV7.x86.msi"
_installdir="/usr/lib"

source=($_downloadsource/$_x86file)
sha256sums=('79ac24e9c12996ba297ac140acc5d383f7e7e6b1acbc02ec00d8821f9eb835ce')

prepare()
{

 7z x "$srcdir/$_x86file" -o"$srcdir"
 7z x "$srcdir/et_bin.cab" -o"$srcdir"
 7z x "$srcdir/e_bin.cab" -o"$srcdir"

 7z x "$srcdir/et_res.cab" -o"$srcdir"
 7z x "$srcdir/e_res.cab" -o"$srcdir"
 7z x "$srcdir/disk1.cab" -o"$srcdir"

}

package()
{  

 mkdir -p "$pkgdir${_installdir}/$pkgname"

 install -Dm644 "$srcdir/FID_SD_OXT_cs" "$pkgdir${_installdir}/$pkgname/Dictionaries/dict-cs.oxt"
 install -Dm644 "$srcdir/FID_SD_OXT_de" "$pkgdir${_installdir}/$pkgname/Dictionaries/dict-de.oxt"
 install -Dm644 "$srcdir/FID_SD_OXT_en" "$pkgdir${_installdir}/$pkgname/Dictionaries/dict-en.oxt"
 install -Dm644 "$srcdir/FID_SD_OXT_es" "$pkgdir${_installdir}/$pkgname/Dictionaries/dict-es.oxt"
 install -Dm644 "$srcdir/FID_SD_OXT_fr" "$pkgdir${_installdir}/$pkgname/Dictionaries/dict-fr.oxt"
 install -Dm644 "$srcdir/FID_SD_OXT_ru" "$pkgdir${_installdir}/$pkgname/Dictionaries/dict-ru.oxt"
 install -Dm644 "$srcdir/FID_SD_OXT_uk" "$pkgdir${_installdir}/$pkgname/Dictionaries/dict-uk.oxt"
 install -Dm644 "$srcdir/FID_SD_GPLv2" "$pkgdir${_installdir}/$pkgname/Dictionaries/GPLv2.txt"
 install -Dm644 "$srcdir/FID_SD_GPLv3" "$pkgdir${_installdir}/$pkgname/Dictionaries/GPLv3.txt"

 install -Dm644 "$srcdir/FID_HelpStub" "$pkgdir${_installdir}/$pkgname/Help/PDFXVE6Sm.pdf"

 install -Dm644 "$srcdir/FID_BKM_cs_CZ" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.cs-CZ.xcl"
 install -Dm644 "$srcdir/FID_BKM_de_DE" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.de-DE.xcl"
 install -Dm644 "$srcdir/FID_BKM_es_ES" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.es-ES.xcl"
 install -Dm644 "$srcdir/FID_BKM_fi_FI" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.fi-FI.xcl"
 install -Dm644 "$srcdir/FID_BKM_fr_FR" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.fr-FR.xcl"
 install -Dm644 "$srcdir/FID_BKM_fy_NL" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.fy-NL.xcl"
 install -Dm644 "$srcdir/FID_BKM_it_IT" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.it-IT.xcl"
 install -Dm644 "$srcdir/FID_BKM_ja_JP" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.ja-JP.xcl"
 install -Dm644 "$srcdir/FID_BKM_nl_NL" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.nl-NL.xcl"
 install -Dm644 "$srcdir/FID_BKM_pl_PL" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.pl-PL.xcl"
 install -Dm644 "$srcdir/FID_BKM_pt_BR" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.pt-BR.xcl"
 install -Dm644 "$srcdir/FID_BKM_pt_PT" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.pt-PT.xcl"
 install -Dm644 "$srcdir/FID_BKM_ru_RU" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.ru-RU.xcl"
 install -Dm644 "$srcdir/FID_BKM_sk_SK" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.sk-SK.xcl"
 install -Dm644 "$srcdir/FID_BKM_sl_SI" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.sl-SI.xcl"
 install -Dm644 "$srcdir/FID_BKM_sr_Latn_RS" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.sr-Latn-RS.xcl"
 install -Dm644 "$srcdir/FID_BKM_sv_SE" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.sv-SE.xcl"
 install -Dm644 "$srcdir/FID_BKM_tr_TR" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.tr-TR.xcl"
 install -Dm644 "$srcdir/FID_BKM_uk_UA" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.uk-UA.xcl"
 install -Dm644 "$srcdir/FID_BKM_zh_CN" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.zh-CN.xcl"
 install -Dm644 "$srcdir/FID_BKM_zh_TW" "$pkgdir${_installdir}/$pkgname/Languages/Bookmarks.zh-TW.xcl"
 install -Dm644 "$srcdir/FID_DB_cs_CZ" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.cs-CZ.xcl"
 install -Dm644 "$srcdir/FID_DB_de_DE" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.de-DE.xcl"
 install -Dm644 "$srcdir/FID_DB_es_ES" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.es-ES.xcl"
 install -Dm644 "$srcdir/FID_DB_fr_FR" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.fr-FR.xcl"
 install -Dm644 "$srcdir/FID_DB_fy_NL" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.fy-NL.xcl"
 install -Dm644 "$srcdir/FID_DB_hu_HU" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.hu-HU.xcl"
 install -Dm644 "$srcdir/FID_DB_it_IT" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.it-IT.xcl"
 install -Dm644 "$srcdir/FID_DB_ja_JP" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.ja-JP.xcl"
 install -Dm644 "$srcdir/FID_DB_nl_NL" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.nl-NL.xcl"
 install -Dm644 "$srcdir/FID_DB_pl_PL" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.pl-PL.xcl"
 install -Dm644 "$srcdir/FID_DB_pt_BR" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.pt-BR.xcl"
 install -Dm644 "$srcdir/FID_DB_pt_PT" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.pt-PT.xcl"
 install -Dm644 "$srcdir/FID_DB_ru_RU" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.ru-RU.xcl"
 install -Dm644 "$srcdir/FID_DB_sl_SI" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.sl-SI.xcl"
 install -Dm644 "$srcdir/FID_DB_sr_Latn_RS" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.sr-Latn-RS.xcl"
 install -Dm644 "$srcdir/FID_DB_sv_SE" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.sv-SE.xcl"
 install -Dm644 "$srcdir/FID_DB_tr_TR" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.tr-TR.xcl"
 install -Dm644 "$srcdir/FID_DB_uk_UA" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.uk-UA.xcl"
 install -Dm644 "$srcdir/FID_DB_zh_CN" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.zh-CN.xcl"
 install -Dm644 "$srcdir/FID_DB_zh_TW" "$pkgdir${_installdir}/$pkgname/Languages/DropBox.zh-TW.xcl"
 install -Dm644 "$srcdir/FID_FO_cs_CZ" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.cs-CZ.xcl"
 install -Dm644 "$srcdir/FID_FO_de_DE" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.de-DE.xcl"
 install -Dm644 "$srcdir/FID_FO_es_ES" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.es-ES.xcl"
 install -Dm644 "$srcdir/FID_FO_fr_FR" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.fr-FR.xcl"
 install -Dm644 "$srcdir/FID_FO_fy_NL" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.fy-NL.xcl"
 install -Dm644 "$srcdir/FID_FO_it_IT" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.it-IT.xcl"
 install -Dm644 "$srcdir/FID_FO_ja_JP" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.ja-JP.xcl"
 install -Dm644 "$srcdir/FID_FO_nl_NL" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.nl-NL.xcl"
 install -Dm644 "$srcdir/FID_FO_pl_PL" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.pl-PL.xcl"
 install -Dm644 "$srcdir/FID_FO_pt_BR" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.pt-BR.xcl"
 install -Dm644 "$srcdir/FID_FO_pt_PT" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.pt-PT.xcl"
 install -Dm644 "$srcdir/FID_FO_ru_RU" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.ru-RU.xcl"
 install -Dm644 "$srcdir/FID_FO_sl_SI" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.sl-SI.xcl"
 install -Dm644 "$srcdir/FID_FO_sr_Latn_RS" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.sr-Latn-RS.xcl"
 install -Dm644 "$srcdir/FID_FO_sv_SE" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.sv-SE.xcl"
 install -Dm644 "$srcdir/FID_FO_tr_TR" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.tr-TR.xcl"
 install -Dm644 "$srcdir/FID_FO_uk_UA" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.uk-UA.xcl"
 install -Dm644 "$srcdir/FID_FO_zh_CN" "$pkgdir${_installdir}/$pkgname/Languages/FileOpenSH.zh-CN.xcl"
 install -Dm644 "$srcdir/FID_GD_cs_CZ" "$pkgdir${_installdir}/$pkgname/Languages/GoogleDrive.cs-CZ.xcl"
 install -Dm644 "$srcdir/FID_GD_de_DE" "$pkgdir${_installdir}/$pkgname/Languages/GoogleDrive.de-DE.xcl"
 install -Dm644 "$srcdir/FID_GD_es_ES" "$pkgdir${_installdir}/$pkgname/Languages/GoogleDrive.es-ES.xcl"
 install -Dm644 "$srcdir/FID_GD_fr_FR" "$pkgdir${_installdir}/$pkgname/Languages/GoogleDrive.fr-FR.xcl"
 install -Dm644 "$srcdir/FID_GD_ja_JP" "$pkgdir${_installdir}/$pkgname/Languages/GoogleDrive.ja-JP.xcl"
 install -Dm644 "$srcdir/FID_GD_nl_NL" "$pkgdir${_installdir}/$pkgname/Languages/GoogleDrive.nl-NL.xcl"
 install -Dm644 "$srcdir/FID_GD_pl_PL" "$pkgdir${_installdir}/$pkgname/Languages/GoogleDrive.pl-PL.xcl"
 install -Dm644 "$srcdir/FID_GD_pt_BR" "$pkgdir${_installdir}/$pkgname/Languages/GoogleDrive.pt-BR.xcl"
 install -Dm644 "$srcdir/FID_GD_pt_PT" "$pkgdir${_installdir}/$pkgname/Languages/GoogleDrive.pt-PT.xcl"
 install -Dm644 "$srcdir/FID_GD_ru_RU" "$pkgdir${_installdir}/$pkgname/Languages/GoogleDrive.ru-RU.xcl"
 install -Dm644 "$srcdir/FID_GD_sl_SI" "$pkgdir${_installdir}/$pkgname/Languages/GoogleDrive.sl-SI.xcl"
 install -Dm644 "$srcdir/FID_GD_sr_Latn_RS" "$pkgdir${_installdir}/$pkgname/Languages/GoogleDrive.sr-Latn-RS.xcl"
 install -Dm644 "$srcdir/FID_GD_tr_TR" "$pkgdir${_installdir}/$pkgname/Languages/GoogleDrive.tr-TR.xcl"
 install -Dm644 "$srcdir/FID_GD_zh_CN" "$pkgdir${_installdir}/$pkgname/Languages/GoogleDrive.zh-CN.xcl"
 install -Dm644 "$srcdir/FID_MD_cs_CZ" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.cs-CZ.xcl"
 install -Dm644 "$srcdir/FID_MD_de_DE" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.de-DE.xcl"
 install -Dm644 "$srcdir/FID_MD_es_ES" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.es-ES.xcl"
 install -Dm644 "$srcdir/FID_MD_fr_FR" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.fr-FR.xcl"
 install -Dm644 "$srcdir/FID_MD_fy_NL" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.fy-NL.xcl"
 install -Dm644 "$srcdir/FID_MD_ja_JP" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.ja-JP.xcl"
 install -Dm644 "$srcdir/FID_MD_nl_NL" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.nl-NL.xcl"
 install -Dm644 "$srcdir/FID_MD_pl_PL" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.pl-PL.xcl"
 install -Dm644 "$srcdir/FID_MD_pt_BR" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.pt_BR.xcl"
 install -Dm644 "$srcdir/FID_MD_pt_PT" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.pt-PT.xcl"
 install -Dm644 "$srcdir/FID_MD_ru_RU" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.ru-RU.xcl"
 install -Dm644 "$srcdir/FID_MD_sl_SI" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.sl-SI.xcl"
 install -Dm644 "$srcdir/FID_MD_sr_Latn_RS" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.sr-Latn-RS.xcl"
 install -Dm644 "$srcdir/FID_MD_tr_TR" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.tr-TR.xcl"
 install -Dm644 "$srcdir/FID_MD_uk_UA" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.uk-UA.xcl"
 install -Dm644 "$srcdir/FID_MD_zh_CN" "$pkgdir${_installdir}/$pkgname/Languages/Markdown.zh-CN.xcl"
 install -Dm644 "$srcdir/FID_OCR_cs_CZ" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.cs-CZ.xcl"
 install -Dm644 "$srcdir/FID_OCR_da_DK" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.da-DK.xcl"
 install -Dm644 "$srcdir/FID_OCR_de_DE" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.de-DE.xcl"
 install -Dm644 "$srcdir/FID_OCR_es_ES" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.es-ES.xcl"
 install -Dm644 "$srcdir/FID_OCR_fi_FI" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.fi-FI.xcl"
 install -Dm644 "$srcdir/FID_OCR_fr_CH" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.fr-CH.xcl"
 install -Dm644 "$srcdir/FID_OCR_fr_FR" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.fr-FR.xcl"
 install -Dm644 "$srcdir/FID_OCR_fy_NL" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.fy-NL.xcl"
 install -Dm644 "$srcdir/FID_OCR_he_IL" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.he-IL.xcl"
 install -Dm644 "$srcdir/FID_OCR_hu_HU" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.hu-HU.xcl"
 install -Dm644 "$srcdir/FID_OCR_it_IT" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.it-IT.xcl"
 install -Dm644 "$srcdir/FID_OCR_ja_JP" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.ja-JP.xcl"
 install -Dm644 "$srcdir/FID_OCR_ko_KR" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.ko-KR.xcl"
 install -Dm644 "$srcdir/FID_OCR_nl_NL" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.nl-NL.xcl"
 install -Dm644 "$srcdir/FID_OCR_pl_PL" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.pl-PL.xcl"
 install -Dm644 "$srcdir/FID_OCR_pt_BR" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.pt-BR.xcl"
 install -Dm644 "$srcdir/FID_OCR_pt_PT" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.pt-PT.xcl"
 install -Dm644 "$srcdir/FID_OCR_ru_RU" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.ru-RU.xcl"
 install -Dm644 "$srcdir/FID_OCR_sk_SK" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.sk-SK.xcl"
 install -Dm644 "$srcdir/FID_OCR_sl_SI" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.sl-SI.xcl"
 install -Dm644 "$srcdir/FID_OCR_sr_Latn_RS" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.sr-Latn-RS.xcl"
 install -Dm644 "$srcdir/FID_OCR_sv_SE" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.sv-SE.xcl"
 install -Dm644 "$srcdir/FID_OCR_tr_TR" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.tr-TR.xcl"
 install -Dm644 "$srcdir/FID_OCR_uk_UA" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.uk-UA.xcl"
 install -Dm644 "$srcdir/FID_OCR_zh_CN" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.zh-CN.xcl"
 install -Dm644 "$srcdir/FID_OCR_zh_TW" "$pkgdir${_installdir}/$pkgname/Languages/OCRPlugin.zh-TW.xcl"
 install -Dm644 "$srcdir/FID_PDFA_cs_CZ" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.cs-CZ.xcl"
 install -Dm644 "$srcdir/FID_PDFA_de_DE" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.de-DE.xcl"
 install -Dm644 "$srcdir/FID_PDFA_es_ES" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.es-ES.xcl"
 install -Dm644 "$srcdir/FID_PDFA_fr_FR" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.fr-FR.xcl"
 install -Dm644 "$srcdir/FID_PDFA_fy_NL" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.fy-NL.xcl"
 install -Dm644 "$srcdir/FID_PDFA_it_IT" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.it-IT.xcl"
 install -Dm644 "$srcdir/FID_PDFA_ja_JP" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.ja-JP.xcl"
 install -Dm644 "$srcdir/FID_PDFA_nl_NL" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.nl-NL.xcl"
 install -Dm644 "$srcdir/FID_PDFA_pl_PL" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.pl-PL.xcl"
 install -Dm644 "$srcdir/FID_PDFA_pt_BR" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.pt-BR.xcl"
 install -Dm644 "$srcdir/FID_PDFA_pt_PT" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.pt-PT.xcl"
 install -Dm644 "$srcdir/FID_PDFA_ru_RU" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.ru-RU.xcl"
 install -Dm644 "$srcdir/FID_PDFA_sl_SI" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.sl-SI.xcl"
 install -Dm644 "$srcdir/FID_PDFA_sr_Latn_RS" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.sr-Latn-RS.xcl"
 install -Dm644 "$srcdir/FID_PDFA_sv_SE" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.sv-SE.xcl"
 install -Dm644 "$srcdir/FID_PDFA_tr_TR" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.tr-TR.xcl"
 install -Dm644 "$srcdir/FID_PDFA_uk_UA" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.uk-UA.xcl"
 install -Dm644 "$srcdir/FID_PDFA_zh_CN" "$pkgdir${_installdir}/$pkgname/Languages/PDFAConverter.zh-CN.xcl"
 install -Dm644 "$srcdir/FID_CONV_cs_CZ" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.cs-CZ.xcl"
 install -Dm644 "$srcdir/FID_CONV_de_DE" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.de-DE.xcl"
 install -Dm644 "$srcdir/FID_CONV_es_ES" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.es-ES.xcl"
 install -Dm644 "$srcdir/FID_CONV_fi_FI" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.fi-FI.xcl"
 install -Dm644 "$srcdir/FID_CONV_fr_FR" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.fr-FR.xcl"
 install -Dm644 "$srcdir/FID_CONV_fy_NL" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.fy-NL.xcl"
 install -Dm644 "$srcdir/FID_CONV_it_IT" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.it-IT.xcl"
 install -Dm644 "$srcdir/FID_CONV_ja_JP" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.ja-JP.xcl"
 install -Dm644 "$srcdir/FID_CONV_nl_NL" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.nl-NL.xcl"
 install -Dm644 "$srcdir/FID_CONV_pt_BR" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.pt-BR.xcl"
 install -Dm644 "$srcdir/FID_CONV_pt_PT" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.pt-PT.xcl"
 install -Dm644 "$srcdir/FID_CONV_ru_RU" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.ru-RU.xcl"
 install -Dm644 "$srcdir/FID_CONV_sl_SI" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.sl-SI.xcl"
 install -Dm644 "$srcdir/FID_CONV_sr_Latn_RS" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.sr-Latn-RS.xcl"
 install -Dm644 "$srcdir/FID_CONV_sv_SE" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.sv-SE.xcl"
 install -Dm644 "$srcdir/FID_CONV_tr_TR" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.tr-TR.xcl"
 install -Dm644 "$srcdir/FID_CONV_uk_UA" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.uk-UA.xcl"
 install -Dm644 "$srcdir/FID_CONV_zh_CN" "$pkgdir${_installdir}/$pkgname/Languages/PDFConverter.zh-CN.xcl"
 install -Dm644 "$srcdir/FID_OPT_cs_CZ" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.cs-CZ.xcl"
 install -Dm644 "$srcdir/FID_OPT_de_DE" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.de-DE.xcl"
 install -Dm644 "$srcdir/FID_OPT_es_ES" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.es-ES.xcl"
 install -Dm644 "$srcdir/FID_OPT_fi_FI" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.fi-FI.xcl"
 install -Dm644 "$srcdir/FID_OPT_fr_FR" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.fr-FR.xcl"
 install -Dm644 "$srcdir/FID_OPT_fy_NL" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.fy-NL.xcl"
 install -Dm644 "$srcdir/FID_OPT_it_IT" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.it-IT.xcl"
 install -Dm644 "$srcdir/FID_OPT_ja_JP" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.ja-JP.xcl"
 install -Dm644 "$srcdir/FID_OPT_nl_NL" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.nl-NL.xcl"
 install -Dm644 "$srcdir/FID_OPT_pl_PL" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.pl-PL.xcl"
 install -Dm644 "$srcdir/FID_OPT_pt_BR" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.pt-BR.xcl"
 install -Dm644 "$srcdir/FID_OPT_pt_PT" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.pt-PT.xcl"
 install -Dm644 "$srcdir/FID_OPT_ru_RU" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.ru-RU.xcl"
 install -Dm644 "$srcdir/FID_OPT_sk_SK" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.sk-SK.xcl"
 install -Dm644 "$srcdir/FID_OPT_sl_SI" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.sl-SI.xcl"
 install -Dm644 "$srcdir/FID_OPT_sr_Latn_RS" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.sr-Latn-RS.xcl"
 install -Dm644 "$srcdir/FID_OPT_sv_SE" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.sv-SE.xcl"
 install -Dm644 "$srcdir/FID_OPT_tr_TR" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.tr-TR.xcl"
 install -Dm644 "$srcdir/FID_OPT_uk_UA" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.uk-UA.xcl"
 install -Dm644 "$srcdir/FID_OPT_zh_CN" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.zh-CN.xcl"
 install -Dm644 "$srcdir/FID_OPT_zh_TW" "$pkgdir${_installdir}/$pkgname/Languages/PDFOptimizer.zh-TW.xcl"
 install -Dm644 "$srcdir/FID_ROL_cs_CZ" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.cs-CZ.xcl"
 install -Dm644 "$srcdir/FID_ROL_da_DK" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.da-DK.xcl"
 install -Dm644 "$srcdir/FID_ROL_de_DE" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.de-DE.xcl"
 install -Dm644 "$srcdir/FID_ROL_es_ES" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.es-ES.xcl"
 install -Dm644 "$srcdir/FID_ROL_fi_FI" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.fi-FI.xcl"
 install -Dm644 "$srcdir/FID_ROL_fr_CH" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.fr-CH.xcl"
 install -Dm644 "$srcdir/FID_ROL_fr_FR" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.fr-FR.xcl"
 install -Dm644 "$srcdir/FID_ROL_fy_NL" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.fy-NL.xcl"
 install -Dm644 "$srcdir/FID_ROL_he_IL" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.he-IL.xcl"
 install -Dm644 "$srcdir/FID_ROL_it_IT" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.it-IT.xcl"
 install -Dm644 "$srcdir/FID_ROL_ja_JP" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.ja-JP.xcl"
 install -Dm644 "$srcdir/FID_ROL_ko_KR" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.ko-KR.xcl"
 install -Dm644 "$srcdir/FID_ROL_nl_NL" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.nl-NL.xcl"
 install -Dm644 "$srcdir/FID_ROL_pl_PL" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.pl-PL.xcl"
 install -Dm644 "$srcdir/FID_ROL_pt_BR" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.pt-BR.xcl"
 install -Dm644 "$srcdir/FID_ROL_pt_PT" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.pt-PT.xcl"
 install -Dm644 "$srcdir/FID_ROL_ru_RU" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.ru-RU.xcl"
 install -Dm644 "$srcdir/FID_ROL_sk_SK" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.sk-SK.xcl"
 install -Dm644 "$srcdir/FID_ROL_sl_SI" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.sl-SI.xcl"
 install -Dm644 "$srcdir/FID_ROL_sr_Latn_RS" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.sr-Latn-RS.xcl"
 install -Dm644 "$srcdir/FID_ROL_sv_SE" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.sv-SE.xcl"
 install -Dm644 "$srcdir/FID_ROL_tr_TR" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.tr-TR.xcl"
 install -Dm644 "$srcdir/FID_ROL_uk_UA" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.uk-UA.xcl"
 install -Dm644 "$srcdir/FID_ROL_zh_CN" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.zh-CN.xcl"
 install -Dm644 "$srcdir/FID_ROL_zh_TW" "$pkgdir${_installdir}/$pkgname/Languages/ReadOutLoud.zh-TW.xcl"
 install -Dm644 "$srcdir/FID_SP_cs_CZ" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.cs-CZ.xcl"
 install -Dm644 "$srcdir/FID_SP_de_DE" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.de-DE.xcl"
 install -Dm644 "$srcdir/FID_SP_es_ES" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.es-ES.xcl"
 install -Dm644 "$srcdir/FID_SP_fr_FR" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.fr-FR.xcl"
 install -Dm644 "$srcdir/FID_SP_fy_NL" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.fy-NL.xcl"
 install -Dm644 "$srcdir/FID_SP_it_IT" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.it-IT.xcl"
 install -Dm644 "$srcdir/FID_SP_ja_JP" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.ja-JP.xcl"
 install -Dm644 "$srcdir/FID_SP_nl_NL" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.nl-NL.xcl"
 install -Dm644 "$srcdir/FID_SP_pl_PL" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.pl-PL.xcl"
 install -Dm644 "$srcdir/FID_SP_pt_BR" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.pt-BR.xcl"
 install -Dm644 "$srcdir/FID_SP_pt_PT" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.pt-PT.xcl"
 install -Dm644 "$srcdir/FID_SP_ru_RU" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.ru-RU.xcl"
 install -Dm644 "$srcdir/FID_SP_sl_SI" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.sl-SI.xcl"
 install -Dm644 "$srcdir/FID_SP_sr_Latn_RS" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.sr-Latn-RS.xcl"
 install -Dm644 "$srcdir/FID_SP_sv_SE" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.sv-SE.xcl"
 install -Dm644 "$srcdir/FID_SP_tr_TR" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.tr-TR.xcl"
 install -Dm644 "$srcdir/FID_SP_uk_UA" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.uk-UA.xcl"
 install -Dm644 "$srcdir/FID_SP_zh_CN" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.zh-CN.xcl"
 install -Dm644 "$srcdir/FID_SP_zh_TW" "$pkgdir${_installdir}/$pkgname/Languages/SharePoint.zh-TW.xcl"
 install -Dm644 "$srcdir/FID_SPL_cs_CZ" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.cs-CZ.xcl"
 install -Dm644 "$srcdir/FID_SPL_da_DK" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.da-DK.xcl"
 install -Dm644 "$srcdir/FID_SPL_de_DE" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.de-DE.xcl"
 install -Dm644 "$srcdir/FID_SPL_es_ES" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.es-ES.xcl"
 install -Dm644 "$srcdir/FID_SPL_fi_FI" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.fi-FI.xcl"
 install -Dm644 "$srcdir/FID_SPL_fr_CH" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.fr-CH.xcl"
 install -Dm644 "$srcdir/FID_SPL_fr_FR" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.fr-FR.xcl"
 install -Dm644 "$srcdir/FID_SPL_fy_NL" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.fy-NL.xcl"
 install -Dm644 "$srcdir/FID_SPL_he_IL" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.he-IL.xcl"
 install -Dm644 "$srcdir/FID_SPL_hu_HU" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.hu-HU.xcl"
 install -Dm644 "$srcdir/FID_SPL_it_IT" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.it-IT.xcl"
 install -Dm644 "$srcdir/FID_SPL_ja_JP" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.ja-JP.xcl"
 install -Dm644 "$srcdir/FID_SPL_ko_KR" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.ko-KR.xcl"
 install -Dm644 "$srcdir/FID_SPL_nl_NL" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.nl-NL.xcl"
 install -Dm644 "$srcdir/FID_SPL_pl_PL" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.pl-PL.xcl"
 install -Dm644 "$srcdir/FID_SPL_pt_BR" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.pt-BR.xcl"
 install -Dm644 "$srcdir/FID_SPL_pt_PT" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.pt-PT.xcl"
 install -Dm644 "$srcdir/FID_SPL_ru_RU" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.ru-RU.xcl"
 install -Dm644 "$srcdir/FID_SPL_sk_SK" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.sk-SK.xcl"
 install -Dm644 "$srcdir/FID_SPL_sl_SI" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.sl-SI.xcl"
 install -Dm644 "$srcdir/FID_SPL_sr_Latn_RS" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.sr-Latn-RS.xcl"
 install -Dm644 "$srcdir/FID_SPL_sv_SE" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.sv-SE.xcl"
 install -Dm644 "$srcdir/FID_SPL_tr_TR" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.tr-TR.xcl"
 install -Dm644 "$srcdir/FID_SPL_uk_UA" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.uk-UA.xcl"
 install -Dm644 "$srcdir/FID_SPL_zh_CN" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.zh-CN.xcl"
 install -Dm644 "$srcdir/FID_SPL_zh_TW" "$pkgdir${_installdir}/$pkgname/Languages/SpellChecker.zh-TW.xcl"
 install -Dm644 "$srcdir/FID_EDT_cs_CZ" "$pkgdir${_installdir}/$pkgname/Languages/Strings.cs-CZ.xcl"
 install -Dm644 "$srcdir/FID_EDT_da_DK" "$pkgdir${_installdir}/$pkgname/Languages/Strings.da-DK.xcl"
 install -Dm644 "$srcdir/FID_EDT_de_DE" "$pkgdir${_installdir}/$pkgname/Languages/Strings.de-DE.xcl"
 install -Dm644 "$srcdir/FID_EDT_el_GR" "$pkgdir${_installdir}/$pkgname/Languages/Strings.el-GR.xcl"
 install -Dm644 "$srcdir/FID_EDT_es_ES" "$pkgdir${_installdir}/$pkgname/Languages/Strings.es-ES.xcl"
 install -Dm644 "$srcdir/FID_EDT_fi_FI" "$pkgdir${_installdir}/$pkgname/Languages/Strings.fi-FI.xcl"
 install -Dm644 "$srcdir/FID_EDT_fr_CH" "$pkgdir${_installdir}/$pkgname/Languages/Strings.fr-CH.xcl"
 install -Dm644 "$srcdir/FID_EDT_fr_FR" "$pkgdir${_installdir}/$pkgname/Languages/Strings.fr-FR.xcl"
 install -Dm644 "$srcdir/FID_EDT_fy_NL" "$pkgdir${_installdir}/$pkgname/Languages/Strings.fy-NL.xcl"
 install -Dm644 "$srcdir/FID_EDT_he_IL" "$pkgdir${_installdir}/$pkgname/Languages/Strings.he-IL.xcl"
 install -Dm644 "$srcdir/FID_EDT_hu_HU" "$pkgdir${_installdir}/$pkgname/Languages/Strings.hu-HU.xcl"
 install -Dm644 "$srcdir/FID_EDT_it_IT" "$pkgdir${_installdir}/$pkgname/Languages/Strings.it-IT.xcl"
 install -Dm644 "$srcdir/FID_EDT_ja_JP" "$pkgdir${_installdir}/$pkgname/Languages/Strings.ja-JP.xcl"
 install -Dm644 "$srcdir/FID_EDT_ko_KR" "$pkgdir${_installdir}/$pkgname/Languages/Strings.ko-KR.xcl"
 install -Dm644 "$srcdir/FID_EDT_nl_NL" "$pkgdir${_installdir}/$pkgname/Languages/Strings.nl-NL.xcl"
 install -Dm644 "$srcdir/FID_EDT_pl_PL" "$pkgdir${_installdir}/$pkgname/Languages/Strings.pl-PL.xcl"
 install -Dm644 "$srcdir/FID_EDT_pt_BR" "$pkgdir${_installdir}/$pkgname/Languages/Strings.pt-BR.xcl"
 install -Dm644 "$srcdir/FID_EDT_pt_PT" "$pkgdir${_installdir}/$pkgname/Languages/Strings.pt-PT.xcl"
 install -Dm644 "$srcdir/FID_EDT_ro_RO" "$pkgdir${_installdir}/$pkgname/Languages/Strings.ro-RO.xcl"
 install -Dm644 "$srcdir/FID_EDT_ru_RU" "$pkgdir${_installdir}/$pkgname/Languages/Strings.ru-RU.xcl"
 install -Dm644 "$srcdir/FID_EDT_sk_SK" "$pkgdir${_installdir}/$pkgname/Languages/Strings.sk-SK.xcl"
 install -Dm644 "$srcdir/FID_EDT_sl_SI" "$pkgdir${_installdir}/$pkgname/Languages/Strings.sl-SI.xcl"
 install -Dm644 "$srcdir/FID_EDT_sr_Latn_RS" "$pkgdir${_installdir}/$pkgname/Languages/Strings.sr-Latn-RS.xcl"
 install -Dm644 "$srcdir/FID_EDT_sv_SE" "$pkgdir${_installdir}/$pkgname/Languages/Strings.sv-SE.xcl"
 install -Dm644 "$srcdir/FID_EDT_tr_TR" "$pkgdir${_installdir}/$pkgname/Languages/Strings.tr-TR.xcl"
 install -Dm644 "$srcdir/FID_EDT_uk_UA" "$pkgdir${_installdir}/$pkgname/Languages/Strings.uk-UA.xcl"
 install -Dm644 "$srcdir/FID_EDT_zh_CN" "$pkgdir${_installdir}/$pkgname/Languages/Strings.zh-CN.xcl"
 install -Dm644 "$srcdir/FID_EDT_zh_TW" "$pkgdir${_installdir}/$pkgname/Languages/Strings.zh-TW.xcl"

 install -Dm644 "$srcdir/FID_OCR_dat_ces" "$pkgdir${_installdir}/$pkgname/PluginsData/OCRLanguages/ces_pxvocr.dat"
 install -Dm644 "$srcdir/FID_OCR_dat_spa" "$pkgdir${_installdir}/$pkgname/PluginsData/OCRLanguages/spa_pxvocr.dat"
 install -Dm644 "$srcdir/FID_OCR_dat_deu" "$pkgdir${_installdir}/$pkgname/PluginsData/OCRLanguages/deu_pxvocr.dat"
 install -Dm644 "$srcdir/FID_OCR_dat_fra" "$pkgdir${_installdir}/$pkgname/PluginsData/OCRLanguages/fra_pxvocr.dat"
 install -Dm644 "$srcdir/FID_OCR_dat_eng" "$pkgdir${_installdir}/$pkgname/PluginsData/OCRLanguages/eng_pxvocr.dat"
 install -Dm644 "$srcdir/FID_OCR_lng_ces" "$pkgdir${_installdir}/$pkgname/PluginsData/OCRLanguages/ces_pxvocr.lng"
 install -Dm644 "$srcdir/FID_OCR_lng_eng" "$pkgdir${_installdir}/$pkgname/PluginsData/OCRLanguages/eng_pxvocr.lng"
 install -Dm644 "$srcdir/FID_OCR_lng_deu" "$pkgdir${_installdir}/$pkgname/PluginsData/OCRLanguages/deu_pxvocr.lng"
 install -Dm644 "$srcdir/FID_OCR_lng_spa" "$pkgdir${_installdir}/$pkgname/PluginsData/OCRLanguages/spa_pxvocr.lng"
 install -Dm644 "$srcdir/FID_OCR_lng_fra" "$pkgdir${_installdir}/$pkgname/PluginsData/OCRLanguages/fra_pxvocr.lng"

 install -Dm644 "$srcdir/FID_Stamps_DynamicDate" "$pkgdir${_installdir}/$pkgname/Stamps/ENU/DynamicDate.pdf"

 install -Dm644 "$srcdir/FID_KeybHook32" "$pkgdir${_installdir}/$pkgname/Plugins.x86/FowpKbd.dll"
 install -Dm644 "$srcdir/FID_ReadOutLoud32" "$pkgdir${_installdir}/$pkgname/Plugins.x86/ReadOutLoud.pvp"
 install -Dm644 "$srcdir/FID_Optimizer32" "$pkgdir${_installdir}/$pkgname/Plugins.x86/PDFOptimizer.pvp"
 install -Dm644 "$srcdir/FID_SpellChecker32" "$pkgdir${_installdir}/$pkgname/Plugins.x86/SpellChecker.pvp"
 install -Dm644 "$srcdir/FID_GD32" "$pkgdir${_installdir}/$pkgname/Plugins.x86/GoogleDrive.pvp"
 install -Dm644 "$srcdir/FID_Markdown32" "$pkgdir${_installdir}/$pkgname/Plugins.x86/MarkdownPlugin.pvp"
 install -Dm644 "$srcdir/FID_Bookmarks32" "$pkgdir${_installdir}/$pkgname/Plugins.x86/Bookmarks.pvp"
 install -Dm644 "$srcdir/FID_DB32" "$pkgdir${_installdir}/$pkgname/Plugins.x86/DropBox.pvp"
 install -Dm644 "$srcdir/FID_SP32" "$pkgdir${_installdir}/$pkgname/Plugins.x86/SharePoint.pvp"
 install -Dm644 "$srcdir/FID_FileOpenSH32" "$pkgdir${_installdir}/$pkgname/Plugins.x86/FileOpenSH.pvp"
 install -Dm644 "$srcdir/FID_OffConv32" "$pkgdir${_installdir}/$pkgname/Plugins.x86/ConvertPDF.pvp"
 install -Dm644 "$srcdir/FID_PDFA32" "$pkgdir${_installdir}/$pkgname/Plugins.x86/PDFAPlugin.pvp"
 install -Dm644 "$srcdir/FID_OCR32" "$pkgdir${_installdir}/$pkgname/Plugins.x86/OCRPlugin.pvp"

 install -Dm644 "$srcdir/FID_ViewerDLL32" "$pkgdir${_installdir}/$pkgname/PDFXEditCore.x86.dll"
 
 install -Dm755 "$srcdir/FID_EditorEXE" "$pkgdir${_installdir}/$pkgname/PDFXEdit.exe" 
 install -Dm644 "$srcdir/FID_Resource" "$pkgdir${_installdir}/$pkgname/Resources.dat"
 install -Dm644 "$srcdir/FID_ViewerLicense" "$pkgdir/usr/share/licenses/$pkgname/PDF_VE.pdf"

 icotool -x "$srcdir/Icon.AppIco" -o "$srcdir"

 _num=1 
 for _size in 256 128 64 48 32 24 16; do 	
	install -Dm644 "$srcdir/Icon.AppIco_${_num}_${_size}x${_size}x32.png" "$pkgdir/usr/share/icons/hicolor/${_size}x${_size}/apps/${pkgname}.png"
        _num=$((_num + 1))
 done

 gendesk -n -f \
          --pkgname="${pkgname}" \
          --pkgdesc="${pkgdesk}" \
          --name="PDF-XChange" \
          --categories="Utility" \
          --startupnotify=true \
          --comment="$pkgdesc" \
          --mimetypes="application/pdf" \
          --custom="StartupWMClass=PDFXEdit.exe"

 sed -i "s/Exec=${pkgname}/Exec=${pkgname} \%f/" "$srcdir/$pkgname.desktop"

 install -Dm644 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
 
 mkdir -p "$pkgdir/usr/bin"

 echo '#!/bin/bash' > "$pkgdir/usr/bin/$pkgname"
 echo "program=\"${pkgname}\"" >> "$pkgdir/usr/bin/$pkgname"
 echo 'if [ ! -d "$HOME/.$program/wine" ] ; then' >> "$pkgdir/usr/bin/$pkgname"
 echo '   mkdir -p "$HOME/.$program/wine"' >> "$pkgdir/usr/bin/$pkgname"
 echo 'fi' >> "$pkgdir/usr/bin/$pkgname"
 echo 'if [ ! -z "$1" ] ; then' >> "$pkgdir/usr/bin/$pkgname"
 echo '   document=$(WINEARCH=win32 WINEPREFIX="$HOME/.$program/wine" /usr/bin/winepath -w "$1")' >> "$pkgdir/usr/bin/$pkgname"
 echo 'else' >> "$pkgdir/usr/bin/$pkgname"
 echo '   unset document' >> "$pkgdir/usr/bin/$pkgname"
 echo 'fi' >> "$pkgdir/usr/bin/$pkgname"
 echo 'WINEARCH=win32 WINEPREFIX="$HOME/.$program/wine" /usr/bin/wine '\"${_installdir}'/$program/PDFXEdit.exe" "$document"' >> "$pkgdir/usr/bin/$pkgname"

 chmod 0755 "$pkgdir/usr/bin/$pkgname"

}
