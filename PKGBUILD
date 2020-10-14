# Maintainer: Franck Stauffer <franck.stauffer@monaco.mc>
# Contributor: Sefa Eyeoglu <contact@scrumplex.net>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Antonio Rojas <arojas@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

pkgname=oxygen-sounds
pkgdesc='KDE Oxygen sound pack'
pkgver=5.20.0
pkgrel=1
arch=('any')
url='https://www.kde.org/workspaces/plasmadesktop/'
license=('LGPL')
source=("https://download.kde.org/stable/plasma/$pkgver/oxygen-$pkgver.tar.xz"{,.sig})
sha256sums=('d01f9ca96d7693c02e97ee9b6a8c55c47ef96b4bde7a7c159813ff41ce0d3d09'
            'SKIP')
validpgpkeys=('2D1D5B0588357787DE9EE225EC94D18F7F05997E') # Jonathan Riddell <jr@jriddell.org>

package() {
  cd "oxygen-$pkgver"
  for file in sounds/*.ogg;do
    install -Dm 644 "$file" "$pkgdir/usr/share/$file"
  done
}
