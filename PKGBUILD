# Maintainer: parcimonic <aur-at_parcimonic-dot_me>
# Maintainer: Jan Alexander Steffens (heftig) <heftig@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Michael Kanis <mkanis_at_gmx_dot_de>

pkgbase=mutter-auto-rotation
pkgname=mutter-auto-rotation
provides=(libmutter-11.so mutter)
conflicts=(mutter)
groups=(gnome)
pkgver=43.1
pkgrel=1
pkgdesc="A window manager for GNOME, with touch-mode auto-rotation (reverts MR 1710)"
url="https://gitlab.gnome.org/GNOME/mutter"
arch=(x86_64)
license=(GPL)
depends=(dconf gobject-introspection-runtime gsettings-desktop-schemas
         libcanberra startup-notification libsm gnome-desktop libxkbcommon-x11
         gnome-settings-daemon libgudev libinput pipewire xorg-xwayland graphene
         libxkbfile libsysprof-capture lcms2 colord)
makedepends=(gobject-introspection git egl-wayland meson xorg-server
             wayland-protocols sysprof gi-docgen xorg-server-xvfb)
checkdepends=(xorg-server-xvfb wireplumber python-dbusmock zenity)
_commit=8329a3eb5f4960df919e0348bd445c40568d3d60  # tags/43.1^0

source=("git+https://gitlab.gnome.org/GNOME/mutter.git#commit=$_commit"
        "0001-Revert-backends-native-Disable-touch-mode-with-point.patch")

sha256sums=('SKIP'
            'fce87093b2f162114cd438a4aa5d3969a709a00416d179f76411a566e5403dae')

pkgver() {
  cd mutter
  git describe --tags | sed 's/[^-]*-g/r&/;s/-/+/g'
}

prepare() {
  cd mutter
  git apply ../0001-Revert-backends-native-Disable-touch-mode-with-point.patch
}

build() {
  CFLAGS="${CFLAGS/-O2/-O3} -fno-semantic-interposition"
  LDFLAGS+=" -Wl,-Bsymbolic-functions"

  arch-meson mutter build \
    -D egl_device=true \
    -D wayland_eglstream=true \
    -D docs=true \
    -D installed_tests=false
  meson compile -C build
}

_check() (
  export XDG_RUNTIME_DIR="$PWD/rdir" GSETTINGS_SCHEMA_DIR="$PWD/build/data"
  mkdir -p -m 700 "$XDG_RUNTIME_DIR"
  glib-compile-schemas "$GSETTINGS_SCHEMA_DIR"

  pipewire &
  _p1=$!

  wireplumber &
  _p2=$!

  trap "kill $_p1 $_p2; wait" EXIT

  meson test -C build --print-errorlogs -t 3
)

_check_disabled() {
  dbus-run-session xvfb-run -s '-nolisten local +iglx -noreset' \
    bash -c "$(declare -f _check); _check"
}

_pick() {
  local p="$1" f d; shift
  for f; do
    d="$srcdir/$p/${f#$pkgdir/}"
    mkdir -p "$(dirname "$d")"
    mv "$f" "$d"
    rmdir -p --ignore-fail-on-non-empty "$(dirname "$f")"
  done
}

package() {
  meson install -C build --destdir "$pkgdir"

  _pick docs "$pkgdir"/usr/share/mutter-*/doc
}

# vim:set sw=2 sts=-1 et:
