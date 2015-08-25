# Maintainer: Mauro Andreolini <mauro.andreolini@unimore.it>

pkgname=pack
_pkgname=PACK
pkgver=0.0.4
pkgrel=1
pkgdesc="Password Analysis and Cracking Kit"
url="http://thesprawl.org/projects/pack/"
arch=('any')
license=('unknown')
depends=('python2' 'aspell' 'aspell-en')
makedepends=()
source=("http://thesprawl.org/media/projects/PACK-0.0.4.tar.gz"
    "fix-python2-invocation.patch"
    "reorganize-enchant-modules.patch"
    "fix-rulegen-module-refs.patch"
)
md5sums=('710963e952e71a889a97624994400219'
         '0992472aa06bb6b0950f2a8d10c07c70'
         '29f727b5930aa0bef58e2e16de728e6b'
         '7d77d5f620af287f829b34b2831114f5')

build() {
    cd ${srcdir}/${_pkgname}-${pkgver}

    patch -Np1 -i ../fix-python2-invocation.patch 
    patch -Np1 -i ../reorganize-enchant-modules.patch
    patch -Np1 -i ../fix-rulegen-module-refs.patch

    mkdir ${pkgname}
    mv enchant ${pkgname}
    touch ${pkgname}/__init__.py
}

package() {
    install -d ${pkgdir}/usr/bin || return 1
    install -d ${pkgdir}/usr/share/${pkgname}/doc || return 1
    install -Dm755 ${srcdir}/${_pkgname}-${pkgver}/maskgen.py ${pkgdir}/usr/bin/maskgen.py
    install -Dm755 ${srcdir}/${_pkgname}-${pkgver}/policygen.py ${pkgdir}/usr/bin/policygen.py
    install -Dm755 ${srcdir}/${_pkgname}-${pkgver}/rulegen.py ${pkgdir}/usr/bin/rulegen.py
    install -Dm644 ${srcdir}/${_pkgname}-${pkgver}/README ${pkgdir}/usr/share/${pkgname}/doc/README

    install -dm755 ${pkgdir}/usr/lib/python2.7/${pkgname}
    install -Dm644 ${srcdir}/${_pkgname}-${pkgver}/${pkgname}/__init__.py ${pkgdir}/usr/lib/python2.7/${pkgname}

    install -dm755 ${pkgdir}/usr/lib/python2.7/${pkgname}/enchant
    install -Dm644 ${srcdir}/${_pkgname}-${pkgver}/${pkgname}/enchant/*.py ${pkgdir}/usr/lib/python2.7/${pkgname}/enchant
    install -dm755 ${pkgdir}/usr/lib/python2.7/${pkgname}/enchant/checker
    install -Dm644 ${srcdir}/${_pkgname}-${pkgver}/${pkgname}/enchant/checker/*.py ${pkgdir}/usr/lib/python2.7/${pkgname}/enchant/checker
    install -dm755 ${pkgdir}/usr/lib/python2.7/${pkgname}/enchant/lib/enchant
    install -Dm644 ${srcdir}/${_pkgname}-${pkgver}/${pkgname}/enchant/lib/enchant/README.txt ${pkgdir}/usr/lib/python2.7/${pkgname}/enchant/lib/enchant/README.txt

    install -dm755 ${pkgdir}/usr/lib/python2.7/${pkgname}/enchant/share/enchant
    install -Dm644 ${srcdir}/${_pkgname}-${pkgver}/${pkgname}/enchant/share/enchant/README.txt ${pkgdir}/usr/lib/python2.7/${pkgname}/enchant/share/enchant/README.txt
    install -dm755 ${pkgdir}/usr/lib/python2.7/${pkgname}/enchant/share/enchant/ispell
    install -Dm644 ${srcdir}/${_pkgname}-${pkgver}/${pkgname}/enchant/share/enchant/ispell/README.txt ${pkgdir}/usr/lib/python2.7/${pkgname}/enchant/share/enchant/ispell/README.txt
    install -dm755 ${pkgdir}/usr/lib/python2.7/${pkgname}/enchant/share/enchant/myspell
    install -Dm644 ${srcdir}/${_pkgname}-${pkgver}/${pkgname}/enchant/share/enchant/myspell/README.txt ${pkgdir}/usr/lib/python2.7/${pkgname}/enchant/share/enchant/myspell/README.txt

    install -dm755 ${pkgdir}/usr/lib/python2.7/${pkgname}/enchant/tokenize
    install -Dm644 ${srcdir}/${_pkgname}-${pkgver}/${pkgname}/enchant/tokenize/*.py ${pkgdir}/usr/lib/python2.7/${pkgname}/enchant/tokenize
}

# vim:set ts=2 sw=2 et:
