# Maintainer: dec05eba <dec05eba@protonmail.com>

pkgname=quickmedia-git
pkgver=r973.0925041
pkgrel=1
pkgdesc='A rofi inspired native client for web services. Supports youtube, soundcloud, nyaa.si, 4chan, matrix, saucenao, hotexamples, anilist and several manga sites.'
arch=('x86_64')
url="https://git.dec05eba.com/QuickMedia"
license=('GPL3')
makedepends=('sibs')
depends=('sfml' 'libx11' 'jsoncpp' 'curl' 'mpv' 'libglvnd' 'libxrandr' 'noto-fonts')
optdepends=(
    'libnotify: For showing notifications'
    'automedia: For automatically downloading new chapters of tracked manga'
    'waifu2x-ncnn-vulkan: For upscaling manga pages when using the --upscale-images option'
    'xdg-utils: For downloading torrents when using nyaa.si plugin or opening remote links'
    'ffmpeg: For displaying webp thumbnails, uploading video thumbnails on matrix and merging video and audio when downloading youtube videos'
    'noto-fonts-cjk: To display chinese, japanese and korean characters'
)
provides=('quickmedia')
conflicts=('quickmedia')
source=("${pkgname}-${pkgver}.tar.gz::https://dec05eba.com/snapshot/QuickMedia.git.r973.0925041.tar.gz")
sha512sums=('75fc5e6943efb5d86f53bf3b6fbe5f233cd39f4c88a8839c13c12df88574333edc63dc0d71bfda925572f3548b60328d99320f4bfaae8d55ac08dc91c5ebe98d')

build() {
  cd "$srcdir"
  sibs build --release
}

package() {
  cd "$srcdir"
  install -Dm755 "sibs-build/$(sibs platform)/release/quickmedia" "$pkgdir/usr/bin/quickmedia"
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
