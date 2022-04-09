# Maintainer: Georg Wagner <puxplaying_at_gmail_dot_com>
# Contributor: @xabbu <https://github.com/xabbu>
# Contributor: Stefano Capitani <stefano_at_manjaro_dot_org>
# Contributor: Mark Wagie <mark_at_manjaro_dot_org>
# Contributor: Jonathon Fernyhough

# Archlinux credits:
# Maintainer: Jan Alexander Steffens (heftig) <heftig@archlinux.org>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Michael Kanis <mkanis_at_gmx_dot_de>

# Ubuntu credits:
# Marco Trevisan: <https://salsa.debian.org/gnome-team/mutter/-/blob/ubuntu/master/debian/patches/x11-Add-support-for-fractional-scaling-using-Randr.patch>

pkgname=mutter-x11-scaling
pkgver=42.0
pkgrel=4
pkgdesc="A window manager for GNOME with X11 fractional scaling patch"
url="https://gitlab.gnome.org/GNOME/mutter"
arch=(x86_64)
license=(GPL)
depends=(dconf gobject-introspection-runtime gsettings-desktop-schemas
         libcanberra startup-notification zenity libsm gnome-desktop 
         libxkbcommon-x11 gnome-settings-daemon libgudev libinput pipewire
         xorg-xwayland graphene libxkbfile libsysprof-capture)
makedepends=(gobject-introspection git egl-wayland meson xorg-server
             wayland-protocols sysprof gi-docgen)
checkdepends=(xorg-server-xvfb wireplumber python-dbusmock)
options=(debug)
provides=(mutter libmutter-10.so)
conflicts=(mutter)
_scaling_commit=0b41b3dfc234e29e7b049e08c41593baab89f6b7 # Commit 0b41b3df
_commit=9249aba72a5c4454894c08735a4963ca1665e34d  # tags/42.0^0
source=("git+https://gitlab.gnome.org/GNOME/mutter.git#commit=$_commit"
	"x11-Add-support-for-fractional-scaling-using-Randr.patch::https://salsa.debian.org/gnome-team/mutter/-/raw/$_scaling_commit/debian/patches/ubuntu/x11-Add-support-for-fractional-scaling-using-Randr.patch"
	"Support-Dynamic-triple-double-buffering.patch::https://salsa.debian.org/gnome-team/mutter/-/raw/f57e36e25ec2db36498b5b630638c67f25eef03a/debian/patches/Support-Dynamic-triple-double-buffering.patch")
sha256sums=('SKIP'
            'ca02dd8479ddfedeabbe2581b52591c2180cba9b0a34515bf1489cc71b974793'
            '9cd474af41c2b51d9c4c3da37b0d0b8edd51953e021ad64f3546d0b4f2db2636')

pkgver() {
  cd mutter
  git describe --tags | sed 's/[^-]*-g/r&/;s/-/+/g'
}

prepare() {
  cd mutter

  # Fix Dash-to-dock not autohiding
  git cherry-pick -n 2aad56b949b8 0280b0aaa563

  # https://bugs.archlinux.org/task/74360
  git cherry-pick -n f9857cb8bd7af20e819283917ae165fa40c19f07

  # Add scaling support using randr under x11 and dynamic triple buffering support
  patch -p1 -i "${srcdir}/x11-Add-support-for-fractional-scaling-using-Randr.patch"
  patch -p1 -i "${srcdir}/Support-Dynamic-triple-double-buffering.patch"
}

build() {
  CFLAGS="${CFLAGS/-O2/-O3} -fno-semantic-interposition"
  LDFLAGS+=" -Wl,-Bsymbolic-functions"

  arch-meson mutter build \
    -D egl_device=true \
    -D wayland_eglstream=true \
    -D installed_tests=false
  meson compile -C build
}

_check() (
  mkdir -p -m 700 "${XDG_RUNTIME_DIR:=$PWD/runtime-dir}"
  glib-compile-schemas "${GSETTINGS_SCHEMA_DIR:=$PWD/build/data}"
  export XDG_RUNTIME_DIR GSETTINGS_SCHEMA_DIR

  pipewire &
  _p1=$!

  wireplumber &
  _p2=$!

  trap "kill $_p1 $_p2; wait" EXIT

  #meson test -C build --print-errorlogs -t 3
)

check() {
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
}

