# Maintainer: Fahad Hossain <8bit.demoncoder AT gmail.com>
pkgname=vivaldi-codecs-ffmpeg-extra-bin
pkgver=62.0.3202.89
pkgrel=1386
pkgdesc="Prebuilt ffmpeg-codecs package for vivaldi"
arch=(
  "x86_64"
)
url="https://packages.ubuntu.com/zesty/amd64/chromium-codecs-ffmpeg-extra/download"
license=('LGPL')
depends=('vivaldi')
provides=(
  'vivaldi-ffmpeg-codecs'
)
conflicts=(
  'vivaldi-ffmpeg-codecs'
)
source=(
  "http://security.ubuntu.com/ubuntu/pool/universe/c/chromium-browser/chromium-codecs-ffmpeg-extra_${pkgver}-0ubuntu0.17.10.${pkgrel}_amd64.deb"
)
md5sums=(
  "7d3f66b00c477d86a2e63eae02d82d3f"
)
install=vivaldi-codecs-ffmpeg-extra-bin.install

prepare() {
  cd "$srcdir"
  tar -xJf data.tar.xz
}

package() {
  cd "$srcdir"
  mkdir -p "$pkgdir/usr/share/vivaldi-codecs"
  cp "$srcdir/usr/lib/chromium-browser/libffmpeg.so" "$pkgdir/usr/share/vivaldi-codecs/libffmpeg.so"
}

