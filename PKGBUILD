# Maintainer: Márk Sági-Kazár <mark.sagikazar@gmail.com>
# Maintainer: Bence Hornák <hornak.bence@gmail.com>

pkgname=anyk
pkgver=2.95.0
subver=0.1
pkgrel=2
pkgdesc='Form fill program of the hungarian tax office (Általános Nyomtatványkitöltő (ÁNYK))'
arch=('any')
url='https://www.nav.gov.hu/nav/letoltesek/nyomtatvanykitolto_programok/nyomtatvany_apeh/keretprogramok/abevjava_install.html'
license=('proprietary')
depends=('java8-openjfx')
makedepends=('unzip')
provides=('abevjava')
source=("https://www.nav.gov.hu/data/cms511362/abevjava_install-${pkgver}-${subver}.noarch.rpm"
        'abevjava'
        'abevjavapath.cfg'
        'anyk.desktop'
        'setenv')
md5sums=('b19ded78f1db9844a82d99548b1aadd5'
         '14e676f715c1008dda83ffd7c3a127ec'
         '5dae655a84d5dd76401011f5629d8f0f'
         'f47ca1665690ac1a54786be1fb937d1a'
         '2e0fae11fbaa20d376a1228ac0262209')

package() {
    install -d -m 755 "${pkgdir}/usr/bin"
    install -d -m 755 "${pkgdir}/usr/share/abevjava"
    install -d -m 755 "${pkgdir}/etc"

    unzip -oq "$srcdir/usr/share/abevjava/abevjava_install-$pkgver-${subver}.jar" -d "$srcdir"
    install -m 655 "${srcdir}"/abevjava_* "${pkgdir}"/usr/share/abevjava
    install -m 655 "${srcdir}"/setenv "${pkgdir}"/usr/share/abevjava
    install -m 655 "${srcdir}"/abevjava "${pkgdir}"/usr/bin
    install -m 644 "${srcdir}"/abevjavapath.cfg "${pkgdir}"/etc

    install -D "${srcdir}/${pkgname}".desktop "${pkgdir}"/usr/share/applications/"${pkgname}".desktop
	install -Dm 644 "${srcdir}"/application/abevjava.png "${pkgdir}"/usr/share/pixmaps/abevjava.png

    cp -r "${srcdir}"/application/* "${pkgdir}"/usr/share/abevjava
}
