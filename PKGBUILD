# $Id$
# Maintainer: Charles Vejnar <first name [dot] last name [at] gmail [dot] com>
# Contributor: Grey Christoforo <first name [at] last name [dot] net>

pkgname=bowtie2
pkgver=2.4.4
pkgrel=1
pkgdesc="Bowtie 2 is an ultrafast and memory-efficient tool for aligning sequencing reads to long reference sequence."
arch=("x86_64")
url="http://bowtie-bio.sourceforge.net/bowtie2"
license=("GPL3")
source=("https://github.com/BenLangmead/bowtie2/archive/v${pkgver}.tar.gz")
sha1sums=('cf23a10261d0ef4b7a993ef562d5ccd4410e7dd6')

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make clean
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make PREFIX=/usr
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make PREFIX=/usr DESTDIR="${pkgdir}" install

    install -dm755 "${pkgdir}/usr/share/doc/${pkgname}"
    cp -a "${srcdir}/bowtie2-${pkgver}/doc" "${pkgdir}/usr/share/doc/${pkgname}"
}
