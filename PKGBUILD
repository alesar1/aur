# Maintainer: Niluge_KiWi <kiwiiii@gmail.com>
# Contributor: Thomas Jost <schnouki@schnouki.net>
# Contributor: cantabile <cantabile dot desu at gmail dot com>
# created by cantabile <cantabile dot desu at gmail dot com>

pkgname=xkb-qwerty-fr
pkgver=0.6
pkgrel=1
pkgdesc="Keyboard layout based on the QWERTY layout with extra symbols and diacritics so that typing both in French and English is easy and fast. It is also easy to learn!"
arch=('any')
url="https://qwerty-fr.org/"
license=('GPL2')
depends=('xkeyboard-config' 'perl')
install=${pkgname}.install
source=("https://github.com/qwerty-fr/qwerty-fr/releases/download/v${pkgver}/qwerty-fr_${pkgver}_linux.deb"
        "xkb-qwerty-fr.hook")
md5sums=('24aa11a33d6fed8930603ecf6593fd8a'
         'a48aeeed95e5309eb22399ec4455bfd3')
sha256sums=('81d265a6780aa203ea1bcd2653099b828b33711a3bbe9ed3fac644e6e77f7f22'
            '093d2b1d27f77ac5d0cff9a6057ceff18ddc73901a9636ba6533a8e40a63e3cc')

build() {
  cd "$srcdir"
  bsdtar xf data.tar.xz
  bsdtar xf control.tar.xz
}

package() {
  cd "$srcdir"

  install -D -m 755 postinst ${pkgdir}/usr/share/libalpm/scripts/xkb-qwerty-fr.install
  install -D -m 755 postrm ${pkgdir}/usr/share/libalpm/scripts/xkb-qwerty-fr.uninstall
  install -D -m 644 xkb-qwerty-fr.hook ${pkgdir}/usr/share/libalpm/hooks/xkb-qwerty-fr.hook

  install -D -m 644 usr/share/X11/xkb/symbols/us_qwerty-fr ${pkgdir}/usr/share/X11/xkb/symbols/us_qwerty-fr

  install -D -m 644 usr/share/doc/xkb-qwerty-fr/changelog.gz ${pkgdir}/usr/share/doc/xkb-qwerty-fr/changelog.gz
  install -D -m 644 usr/share/doc/xkb-qwerty-fr/copyright ${pkgdir}/usr/share/doc/xkb-qwerty-fr/copyright
  install -D -m 644 usr/share/doc/xkb-qwerty-fr/keymap.txt ${pkgdir}/usr/share/doc/xkb-qwerty-fr/keymap.txt

  install -D -m 644 usr/share/man/man7/qwerty-fr.7.gz ${pkgdir}/usr/share/man/man7/qwerty-fr.7.gz
}
