# Maintainer:  Wez Furlong <wez at wezfurlong dot org>
# NOTE: if you're looking at this on AUR, this file is generated from
# https://github.com/wez/wezterm/blob/main/ci/PKGBUILD.template
# by automation in the wezterm repo.

pkgname=wezterm-bin
_tag=20210404-112810-b63a949d
pkgver=$(echo $_tag | tr - .)
pkgrel=2
pkgdesc='A GPU-accelerated cross-platform terminal emulator and multiplexer implemented in Rust'
arch=('i686' 'x86_64')
url='https://wezfurlong.org/wezterm'
license=('MIT')
provides=('wezterm')
# Don't strip: it will break the binary and it only saves ~10% anyway
options=('!strip')
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
  "wezterm::https://github.com/wez/wezterm/releases/download/${_tag}/WezTerm-${_tag}-Ubuntu16.04.AppImage"
  'LICENSE::https://github.com/wez/wezterm/raw/main/LICENSE.md'
)
sha256sums=(
  '3e205049a6c5ae7c566551b0c3f8a295eb9445b4128a685d75a06faebb172d53'
  'ad915d9508677a4e94e4b3c0a045fedd20e953d95d7cd3ec97e6d16840fa0ed5'
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
  install -Dm755 squashfs-root/usr/bin/wezterm-gui -t "${pkgdir}/usr/bin/"
  install -Dm755 squashfs-root/usr/bin/wezterm-mux-server -t "${pkgdir}/usr/bin/"
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
  install -Dm644 squashfs-root/usr/share/icons/hicolor/128x128/apps/org.wezfurlong.wezterm.png \
                 "${pkgdir}/usr/share/icons/hicolor/128x128/apps/org.wezfurlong.wezterm.png"
  install -Dm644 squashfs-root/usr/share/applications/org.wezfurlong.wezterm.desktop \
                 "${pkgdir}/usr/share/applications/org.wezfurlong.wezterm.desktop"
}
