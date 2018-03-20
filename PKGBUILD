# Maintainer: Will Price <will.price94@gmail.com>

_version=2018-02-27
_lang=english
pkgname=stanford-corenlp-models-$_lang
pkgver=3.9.1
pkgrel=2
pkgdesc="Parser models for the $_lang language for the Stanford parser."
arch=(any)
url="https://nlp.stanford.edu/software/lex-parser.shtml"
license=('GPL')
groups=(stanford-corenlp-models)
depends=(java-runtime)
source=("https://nlp.stanford.edu/software/stanford-${_lang}-corenlp-${_version}-models.jar")
md5sums=('d8e04b649c28b87465eccc263d9b827e')
noextract=("stanford-${_lang}-corenlp-${_version}-models.jar")

package() {
    mkdir -p "${pkgdir}"/usr/share/stanford-corenlp/models
    cp  "stanford-${_lang}-corenlp-${_version}-models.jar" \
        "${pkgdir}/usr/share/stanford-corenlp/models"
}
