pkgname=plasma5-applets-systemloadviewer
pkgver=5.20.80
pkgrel=1
pkgdesc="Deprecated Plasma 5 plasmoid for monitoring system load. I preserved it as I prefer to use this plasmoid."
arch=('x86_64')
license=('GPL3')
depends=('plasma-workspace' 'libcanberra-pulse' 'pulseaudio' 'perl')
optdepends=()
makedepends=('extra-cmake-modules' 'kdoctools' 'kross')
url="https://home.otoy.com/render/octane-render/demo/"
source=('https://invent.kde.org/plasma/kdeplasma-addons#commit=62730341432d3abf203ea5d2f5583cd5a0b64123'
        'limit-to-only-target.patch')

prepare()
{
  cd "$srcdir/$pkgname-$pkgver"
  patch --strip=1 --input=limit-to-only-target.patch
}
        
build()
{
  cmake -B build -S $pkgname-$pkgver \
    -DBUILD_TESTING=OFF
  cmake --build build
}

package()
{
  DESTDIR="$pkgdir" cmake --install build
}
