# Maintainer: Márk Sági-Kazár <mark.sagi-kazar@gmail.com>
# Maintainer: Bence Hornák <hornak.bence@gmail.com>

pkgname=anyk
pkgver=2.84
pkgrel=1
pkgdesc="Form fill program of the hungarian tax office (Általános Nyomtatványkitöltő (ÁNYK))"
arch=('any')
url="https://www.nav.gov.hu/nav/letoltesek/nyomtatvanykitolto_programok/nyomtatvany_apeh/keretprogramok/abevjava_install.html"
license=('proprietary')
depends=('java-environment>=8')
provides=('abevjava')
source=("https://www.nav.gov.hu/data/cms36637/abevjava_install.jar")
md5sums=("5b22dfa03e0ce38d7f1c26742c895fab")

package() {
    install -d -m 755 "${pkgdir}/usr/bin"
    install -d -m 755 "${pkgdir}/usr/share/abevjava"
    install -d -m 755 "${pkgdir}/etc"

    cp -r ${srcdir}/application/* "${pkgdir}/usr/share/abevjava"
    install -m 655 ${startdir}/abevjava_* "${pkgdir}/usr/share/abevjava"
    install -m 655 ${startdir}/setenv "${pkgdir}/usr/share/abevjava"
    install -m 655 ${startdir}/abevjava "${pkgdir}/usr/bin"
    install -m 644 ${startdir}/abevjavapath.cfg "${pkgdir}/etc"
}
