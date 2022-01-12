# Maintainer: Norbert Balázs <bnorb93@gmail.com>
# Maintainer: Márk Sági-Kazár <mark.sagikazar@gmail.com>
# Maintainer: Bence Hornák <hornak.bence@gmail.com>

pkgname=anyk
pkgver=3.12.0
subver=0.1
cms='cms587298'
pkgrel=1
pkgdesc='Form fill program of the Hungarian tax office (Általános Nyomtatványkitöltő (ÁNYK))'
arch=('any')
url='https://www.nav.gov.hu/nav/letoltesek/nyomtatvanykitolto_programok/nyomtatvany_apeh/keretprogramok/abevjava_install.html'
license=('proprietary')
depends=('java8-openjfx')
makedepends=('unzip')
provides=('abevjava')
source=("https://www.nav.gov.hu/data/${cms}/abevjava_install-3.11.0-${subver}.noarch.rpm" # temporary fix for 3.12 as the link on nav.gov.hu is incorrect. TODO: clean up after NAV fixes the link on their site
        'abevjava'
        'abevjavapath.cfg'
        'anyk.desktop'
        'setenv'
        'anyk.sysusers')
md5sums=('127f09a178df966829582c5a289de1f4'
         '14e676f715c1008dda83ffd7c3a127ec'
         '5dae655a84d5dd76401011f5629d8f0f'
         '86e4d78220da7d2d7a9015067d48ab9f'
         '2e0fae11fbaa20d376a1228ac0262209'
         'b13f867247c573d73509520ffd02de56')

package() {
    install -d -m 755 "${pkgdir}/usr/bin"
    install -d -m 755 "${pkgdir}/usr/share/abevjava"
    install -d -m 755 "${pkgdir}/etc"

    unzip -oq "$srcdir/usr/share/abevjava/abevjava_install-$pkgver-${subver}.jar" -d "$srcdir"
    install -m 655 "${srcdir}"/setenv "${pkgdir}"/usr/share/abevjava
    install -m 655 "${srcdir}"/abevjava "${pkgdir}"/usr/bin
    install -m 644 "${srcdir}"/abevjavapath.cfg "${pkgdir}"/etc

    install -D "${srcdir}/${pkgname}".desktop "${pkgdir}"/usr/share/applications/"${pkgname}".desktop
	  install -Dm 644 "${srcdir}"/application/abevjava.png "${pkgdir}"/usr/share/pixmaps/abevjava.png

    cp -r "${srcdir}"/application/* "${pkgdir}"/usr/share/abevjava

    # Create anyk group and set download folder writable for group members
    install -Dm 644 "${srcdir}/anyk.sysusers" "${pkgdir}/usr/lib/sysusers.d/anyk.conf"
    
    chgrp -R 169 "${pkgdir}/usr/share/abevjava/abev"
    chgrp -R 169 "${pkgdir}/usr/share/abevjava/eroforrasok"
    chgrp -R 169 "${pkgdir}/usr/share/abevjava/nyomtatvanyok"
    chgrp -R 169 "${pkgdir}/usr/share/abevjava/upgrade"
    chgrp -R 169 "${pkgdir}/usr/share/abevjava/segitseg"

    chmod -R g=u "${pkgdir}/usr/share/abevjava/abev"
    chmod -R g=u "${pkgdir}/usr/share/abevjava/eroforrasok"
    chmod -R g=u "${pkgdir}/usr/share/abevjava/nyomtatvanyok"
    chmod -R g=u "${pkgdir}/usr/share/abevjava/upgrade"
    chmod -R g=u "${pkgdir}/usr/share/abevjava/segitseg"
    
    install=anyk.install
}
