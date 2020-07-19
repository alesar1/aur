# Maintainer: Dan Elkouby <streetwalkermc@gmail.com>
# Contributor: Jerome Leclanche <jerome@leclan.ch>
# Contributor: Alexander F. Rødseth <xyproto@archlinux.org>
# Contributor: Brett Cornwall <ainola@archlinux.org>

pkgname=sway9
pkgver=1.5
epoch=1
pkgrel=1
_commit=25e6c56e64b72bd8fded6f1c1f063e04d534b21f
pkgdesc='Tiling Wayland compositor and replacement for the i3 window manager (personal build)'
arch=(x86_64)
url='https://github.com/Streetwalrus/sway9'
license=(MIT)
depends=(
  'cairo'
  'gdk-pixbuf2'
  'json-c'
  'pango'
  'polkit'
  'pcre'
  'swaybg'
  'ttf-font'
  'wlroots'
)
makedepends=(git meson ninja scdoc setconf wayland-protocols)
provides=(sway)
conflicts=(sway)
backup=(etc/sway/config)
optdepends=(
  'alacritty: Terminal emulator used by the default config'
  'dmenu: Application launcher'
  'grim: Screenshot utility'
  'i3status: Status line'
  'mako: Lightweight notification daemon'
  'slurp: Select a region'
  'swayidle: Idle management daemon'
  'swaylock: Screen locker'
  'wallutils: Timed wallpapers'
  'waybar: Highly customizable bar'
  'xorg-server-xwayland: X11 support'
)
source=("git+https://github.com/Streetwalrus/$pkgname.git#commit=$_commit"
        "50-systemd-user.conf")
sha512sums=('SKIP'
            '57590bc0d14c87289a4a9cd67991c6a841e54244d2a6186b5da5a08e633de2e8631959fa8c77ede211b0a5f315d920f2c1350951a53d6f2e9e81859056cb3c9e')
validpgpkeys=('9DDA3B9FA5D58DD5392C78E652CB6609B22DA89A') # Drew DeVault

build() {
  mkdir -p build
  arch-meson build "$pkgname" -D werror=false -D b_ndebug=true
  ninja -C build
}

package() {
  DESTDIR="$pkgdir" ninja -C build install
  install -Dm644 "$pkgname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 50-systemd-user.conf -t "$pkgdir/etc/sway/config.d/"

  for util in autoname-workspaces.py inactive-windows-transparency.py grimshot; do
    install -Dm755 "$pkgname/contrib/$util" -t \
                   "$pkgdir/usr/share/$pkgname/scripts"
  done
}

# vim: ts=2 sw=2 et
