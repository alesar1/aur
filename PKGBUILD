# Maintainer: Jean Lucas <jean@4ray.co>

pkgname=beaker-git
pkgver=0.8.8+r30+g111b6370
pkgrel=1
pkgdesc='Experimental peer-to-peer web browser (git)'
arch=(i686 x86_64)
url=https://beakerbrowser.com
license=(MIT)
depends=(alsa-lib atk at-spi2-atk at-spi2-core cairo dbus desktop-file-utils gcc-libs gdk-pixbuf2 glib2 glibc gtk3 hicolor-icon-theme libcups libsodium libx11 libxcb libxcomposite libxcursor libxdamage libxext libxfixes libxi libxrandr libxrender libxss libxtst nodejs nspr nss pango python)
makedepends=(git npm python2)
provides=(beaker)
conflicts=(beaker beaker-browser-bin)
source=(git+https://github.com/beakerbrowser/beaker
        beaker.desktop)
sha512sums=('SKIP'
            '4b61e8a4830fdac99afe2a04885fdd7c64415e32bf0bcb990ad81a7928ff7185a09ef43e827a159410302a2aa536b96a90de9fe29236341882bd464492214cca')

pkgver() {
  cd beaker
  git describe --tags | sed 's#-#+#g;s#+#+r#'
}

build() {
  cd beaker
  npm i
  npm run rebuild
  npx electron-builder --dir
}

package() {
  install -Dm 644 beaker.desktop -t "$pkgdir"/usr/share/applications

  cd beaker

  mkdir "$pkgdir"/usr/{lib,bin}
  cp -a dist/linux-unpacked "$pkgdir"/usr/lib/beaker
  ln -s /usr/lib/beaker/beaker-browser "$pkgdir"/usr/bin/beaker

  for i in 16 24 32 48 64 96 128 256 512 1024; do
    install -Dm 644 build/icons/${i}x${i}.png \
      "$pkgdir"/usr/share/icons/hicolor/${i}x${i}/apps/beaker.png
  done

  install -Dm 644 LICENSE -t "$pkgdir"/usr/share/licenses/beaker
}
