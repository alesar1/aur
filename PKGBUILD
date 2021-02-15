# Maintainer: picokan <todaysoracle@protonmail.com>
# Contributor: Plague-doctor <plague at privacyrequired dot com >

pkgname=freetube
_pkgname=FreeTube
pkgver=0.11.3
pkgrel=1
pkgdesc='An open source desktop YouTube player built with privacy in mind.'
arch=('x86_64' 'arm')
license=('AGPL3')
depends=( 'gtk3' 'nss' 'electron')
makedepends=('npm' )
conflicts=('freetube-git' 'freetube-bin')
url=https://freetubeapp.io
source=(https://github.com/FreeTubeApp/FreeTube/archive/v0.11.3-beta.tar.gz
        package-only-necessary.diff
        freetube.desktop
        freetube.sh)
sha256sums=(a70b7d607ab47cccef4e60f44bbf267ce936f2ce91f0bc6f6b3a2f45f9cf5153
            SKIP SKIP SKIP)

prepare() {
  sed -i 's@"electron": "^11.1.0,"@@g' "$srcdir/$_pkgname-$pkgver-beta/package.json"
  patch "$srcdir/$_pkgname-$pkgver-beta/_scripts/build.js" < package-only-necessary.diff
}

build() {
  cd "$srcdir/$_pkgname-$pkgver-beta"
  npm install
  npm run build
}

package() {
  install -d "${pkgdir}"/{usr/bin,usr/lib/freetube}
  cp -R "./$_pkgname-$pkgver-beta/build/linux-unpacked/resources/app.asar" "$pkgdir/usr/lib/$pkgname"
  install -Dm755 "./freetube.sh" "$pkgdir/usr/bin/$pkgname"
  
  cd $_pkgname-$pkgver-beta
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 "./_icons/256x256.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"
  cd ..
  install -Dm644 "freetube.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
}
