# Maintainer: Gabriele Musco <emaildigabry@gmail.com>
# Upstream URL: https://github.com/gabmus/razercommander

pkgname=razercommander-git
pkgver=1.0.3
pkgrel=6
pkgdesc='A simple GTK control center for managing razer peripherals on Linux.'
arch=('any')
url='https://github.com/gabmus/razercommander'
license=('GPLv3')
depends=('razer-driver-dkms' 'razer-daemon' 'python-razer' 'gtk3>=3.20' 'python')
makedepends=('git')
source=("razercommander::git+git://github.com/gabmus/razercommander")
md5sums=('SKIP')

package() {
  cd "$srcdir"
  mkdir -p $pkgdir/usr/share/applications
  mkdir -p $pkgdir/usr/bin
  cp razercommander/razercommander.desktop.in $pkgdir/usr/share/applications/razercommander.desktop
  cp -r razercommander $pkgdir/usr/share/razercommander
  cat << EOF > $pkgdir/usr/bin/razercommander
#!/bin/sh
python3 /usr/share/razercommander/main.py
EOF
  chmod +x $pkgdir/usr/bin/razercommander
}
