# Maintainer: David Bernheisel <david+aur@bernheisel.com>
# Based on the brscan4 PKGBUILD by Harey

pkgname=brscan5
pkgver=1.2.2_0
pkgrel=1
pkgdesc='SANE drivers from Brother for brscan5 compatible models'
arch=('i686' 'x86_64')
license=('GPL' 'custom:Brother')
url="http://support.brother.com"
depends=('sane' 'libusb-compat')
optdepends=('gtk2: for running brscan_gnetconfig')
source=(
  'http://www.brother.com/agreement/English_sane/agree.html'
  'mk-udev-rules'
  'brother5.conf'
)
md5sums=(
  'ccffb9a6f6d436b21be25b0241068981'
  'ca07cab058b704b7b12ba076d00be2f0'
  '90bf4aa2e87b68ba2ea1aa7e43b019d9'
)

source_x86_64=("https://download.brother.com/welcome/dlf104036/${pkgname}-${pkgver/_/-}.x86_64.rpm")
md5sums_x86_64=('ced6a131a5bb5277ebe4d2b3935c4910')
source_i686=("https://download.brother.com/welcome/dlf104035/${pkgname}-${pkgver/_/-}.i386.rpm")
md5sums_i686=('42187c00a4073570f07c888c180e4dc1')
install="brscan5.install"

build() {
  mkdir -p usr/lib/udev/rules.d
  ./mk-udev-rules opt/brother/scanner/brscan5/{brscan5.ini,models/*.ini} > "usr/lib/udev/rules.d/40-$pkgname.rules"
}

package() {
  cp -r "$srcdir/etc" "$pkgdir"
  cp -r "$srcdir/opt" "$pkgdir"
  cp -r "$srcdir/usr" "$pkgdir"

  rm -rf "$pkgdir/etc/udev"

  install -D -m644 "$srcdir/agree.html" "$pkgdir/usr/share/licenses/$pkgname/agree.html"
  install -D -m644 "brother5.conf" "$pkgdir/etc/sane.d/dll.d/brother5.conf"

  mkdir -p "$pkgdir/usr/lib/sane"
  cd "$pkgdir/usr/lib/sane"
  mv "$pkgdir/opt/brother/scanner/brscan5/libsane-brother5.so.1.0.7" "$pkgdir/usr/lib/sane"
  ln -sf libsane-brother5.so.1.0.7 libsane-brother5.so.1
  ln -sf libsane-brother5.so.1 libsane-brother5.so

  cd "$pkgdir/usr/lib"
  mv "$pkgdir/opt/brother/scanner/brscan5/libLxBsScanCoreApi.so.2.0.0" "$pkgdir/usr/lib"
  ln -sf "libLxBsScanCoreApi.so.2.0.0" "libLxBsScanCoreApi.so.2"
  ln -sf "libLxBsScanCoreApi.so.2" "libLxBsScanCoreApi.so"

  libs=(libLxBsNetDevAccs libLxBsDeviceAccs libLxBsUsbDevAccs)
  for lib in "${libs[@]}"; do
    mv "$pkgdir/opt/brother/scanner/brscan5/${lib}.so.1.0.0" "$pkgdir/usr/lib"
    ln -sf "$lib.so.1.0.0" "$lib.so.1"
    ln -sf "$lib.so.1" "$lib.so"
  done
}
