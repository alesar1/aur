# Maintainer:  Wez Furlong <wez at wezfurlong dot org>

pkgname=wezterm-nightly-bin
pkgver=20200517.122836.92c201c6.105.g5d508350
pkgrel=3
pkgdesc='Bleeding edge builds of a GPU-accelerated cross-platform terminal emulator and multiplexer implemented in Rust'
arch=('i686' 'x86_64')
url='https://wezfurlong.org/wezterm'
license=('MIT')
provides=('wezterm')
conflicts=('wezterm-bin')
# Don't strip: it will break the AppImage!
options=('!strip')
depends=('fuse')
makedepends=('fuse')
depends=(
  'dbus'
  'fontconfig'
  'hicolor-icon-theme'
  'libx11'
  'libxkbcommon-x11'
  'wayland'
  'xcb-util-keysyms'
  'xcb-util-wm'
)
source=(
  "wezterm::https://github.com/wez/wezterm/releases/download/nightly/WezTerm-nightly-Ubuntu16.04.AppImage"
  'LICENSE::https://github.com/wez/wezterm/raw/master/LICENSE.md'
)
sha256sums=(
  'SKIP'
  '191c46fcf52061382b1c51a70311eb9081381cc158e5899f3739473a9432185b'
)

prepare() {
  chmod +x "${srcdir}/wezterm"
}

pkgver() {
  "${srcdir}/wezterm" --version | cut -d' ' -f2 | tr - .
}

build() {
  "${srcdir}/wezterm" --appimage-extract >/dev/null
}

package() {
  install -Dm755 squashfs-root/usr/bin/wezterm -t "${pkgdir}/usr/bin/"
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
  install -Dm644 squashfs-root/usr/share/icons/hicolor/128x128/apps/org.wezfurlong.wezterm.png \
                 "${pkgdir}/usr/share/icons/hicolor/128x128/apps/org.wezfurlong.wezterm.png"
  install -Dm644 squashfs-root/usr/share/applications/org.wezfurlong.wezterm.desktop \
                 "${pkgdir}/usr/share/applications/org.wezfurlong.wezterm.desktop"
  install -dm755 ${pkgdir}/usr/share/wezterm/colors
  install -Dm644 -t ${pkgdir}/usr/share/wezterm/colors/ squashfs-root/usr/share/wezterm/colors/*
}
