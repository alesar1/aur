# Maintainer: dec05eba <dec05eba@protonmail.com>

pkgname=quickmedia-git
pkgver=r353.7e1a950
pkgrel=1
pkgdesc='A dmenu-inspired native client for web services. Supports youtube, nyaa.si, 4chan, matrix and several manga sites.'
arch=('x86_64')
url="https://git.dec05eba.com/QuickMedia"
license=('GPL3')
makedepends=('sibs')
depends=('sfml' 'libx11' 'jsoncpp' 'cppcodec' 'tidy' 'curl' 'mpv' 'youtube-dl' 'libglvnd' 'libxrandr' 'noto-fonts' 'noto-fonts-cjk')
optdepends=(
    'libnotify: For showing notifications'
    'automedia: For automatically downloading new chapters of tracked manga'
    'waifu2x-ncnn-vulkan: For upscaling manga pages when using the --upscale-images option'
    'xdg-utils: For downloading torrents when using nyaa.si plugin'
    'ffmpeg: For sending video metadata and thumbnail with /upload in matrix'
)
provides=('QuickMedia')
conflicts=('QuickMedia')
source=("${pkgname}-${pkgver}.tar.gz::https://dec05eba.com/snapshot/QuickMedia.git.tar.gz")
sha512sums=('622267d9ad798c4d880277c2d2f1b514b37a432b764a95f09f6654fcf2c562a289351bc897704c0b7851c0a36aa37886ffbea66838756fee47281c23dae5ddaf')

build() {
  cd "$srcdir"
  sibs build --release
}

package() {
  cd "$srcdir"
  install -Dm755 "sibs-build/$(sibs platform)/release/QuickMedia" "$pkgdir/usr/bin/QuickMedia"
  install -Dm644 boards.json "$pkgdir/usr/share/quickmedia/boards.json"
  install -Dm644 input.conf "$pkgdir/usr/share/quickmedia/input.conf"
  for file in images/* icons/* shaders/*; do
    install -Dm644 "$file" "$pkgdir/usr/share/quickmedia/$file"
  done
  for file in launcher/*; do
    filename=$(basename "$file")
    install -Dm644 "$file" "$pkgdir/usr/share/applications/$filename"
  done
}
