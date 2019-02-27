# Maintainer: nblock <nblock [/at\] archlinux DOT us>
# Contributor: Frederik AlkÃ¦rsig (FALKER) <havnelisten AT gmail.com>

pkgname=thinkfan
pkgver=1.0.2
pkgrel=1
pkgdesc="A minimalist fan control program. Supports the sysfs hwmon interface and thinkpad_acpi"
url="https://github.com/vmatare/thinkfan"
arch=('i686' 'x86_64')
makedepends=('cmake')
depends=('libatasmart' 'yaml-cpp')
optdepends=('lm_sensors: hwmon support')
backup=('etc/systemd/system/thinkfan.service.d/override.conf')
license=('GPL')
source=("$pkgname-$pkgver.tar.gz::https://github.com/vmatare/$pkgname/archive/$pkgver.tar.gz"
        'thinkfan.service'
        'thinkpad_acpi.conf')
sha256sums=('6f9db8a1d47dcf00e3b5a6e4f07be573b1ad8c860874002078394b263539751e'
            '5b743256afc30d8a2db840f16b03871abbe0a033dd1b0d3f1b7d5a544808271f'
            '28874576641b3cc1aa486e1bc9ed40eadfe8b13d6d3014016e31fedc5dc5195f')
install=thinkfan.install

build() {
  cd "$srcdir/$pkgname-$pkgver"

  cmake . -DCMAKE_INSTALL_PREFIX=/usr -DUSE_ATASMART:BOOL=ON
  make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  install -d -m755 "$pkgdir"/usr/{bin,lib/{modprobe.d,systemd/system},share/{doc/"$pkgname"/{,examples},man/man1}}
  install -d -m755 "$pkgdir"/etc/systemd/system/thinkfan.service.d
  install -D -m755 "$pkgname" "$pkgdir"/usr/bin
  install -D -m644 README "$pkgdir"/usr/share/doc/"$pkgname"
  install -D -m644 examples/* "$pkgdir"/usr/share/doc/"$pkgname"/examples
  install -D -m644 src/"$pkgname".1 "$pkgdir"/usr/share/man/man1
  install -D -m644 ../"$pkgname".service rcscripts/systemd/thinkfan-wakeup.service "$pkgdir"/usr/lib/systemd/system
  install -D -m644 rcscripts/systemd/override.conf "$pkgdir"/etc/systemd/system/thinkfan.service.d
  install -D -m644 ../thinkpad_acpi.conf "$pkgdir"/usr/lib/modprobe.d
}

# vim:set ts=2 sw=2 noet:
