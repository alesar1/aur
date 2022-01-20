# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Co-Maintainer: Aaron J. Graves <linux@ajgraves.com>
# Contributor: ganthern <https://github.com/ganthern>
pkgname=tutanota-desktop
pkgver=3.91.2
pkgrel=1
pkgdesc="Official Tutanota email client"
arch=('x86_64')
url="https://tutanota.com"
license=('GPL3')
depends=('nss' 'libappindicator-gtk3' 'libnotify' 'org.freedesktop.secrets')
makedepends=('nodejs>=16' 'npm>=7')
source=("https://github.com/tutao/tutanota/archive/${pkgname%-*}-release-$pkgver.tar.gz"
        "$pkgname"
        "$pkgname.desktop")
sha256sums=('8e19dc808df954e5475143b9bc9842082b9e9fcbd6189a4f643d7db9ec53321b'
            '4f91e842bd92a3312943854383e4929f9baf6cb684a7027aa55edcce1bf4ca16'
            '9a41e5474e1568b13093c91fd54538fe614003f5f5d4f895553f73207c28cb08')

build() {
  cd "${pkgname%-*}-${pkgname%-*}-release-$pkgver"
  export npm_config_cache="$srcdir/npm_cache"
  npm ci
  npm run build-packages
  node dist -l --custom-desktop-release --unpacked
}

package() {
  cd "${pkgname%-*}-${pkgname%-*}-release-$pkgver"
  install -d "$pkgdir/opt/$pkgname/"
  cp -r build/desktop/linux-unpacked/* \
    "$pkgdir/opt/$pkgname/"

  install -Dm755 "$srcdir/$pkgname" -t "$pkgdir/usr/bin/"

  for icon_size in 64 512; do
    icons_dir=/usr/share/icons/hicolor/${icon_size}x${icon_size}/apps/
    install -Dm644 resources/desktop-icons/icon/${icon_size}.png \
      ${pkgdir}${icons_dir}${pkgname}.png
  done

  install -Dm644 "$srcdir/$pkgname.desktop" -t \
    "$pkgdir/usr/share/applications/"
}
