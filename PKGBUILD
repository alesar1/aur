# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Maintainer: Ionut Biru <ibiru@archlinux.org>
# Contributor: Michael Kanis <mkanis_at_gmx_dot_de>

# Patched package maintainer: Saren Arterius <saren@wtako.net>
# Patch origin: https://gist.github.com/DeadMetaler/12622bf9415c1100f2d436ffbd6778c6

### BUILD OPTIONS
# Set these variables to ANYTHING that is not null to enable them

### Revert offending commit, recommanded to disable if not using NVIDIA
_revert=0


pkgname=mutter-781835-workaround
pkgver=3.32.0+38+gcc2f31e8c
pkgrel=1
pkgdesc="A window manager for GNOME. This package reverts a commit which may causes performance problems for nvidia driver users. Some performance patches also included."
url="https://gitlab.gnome.org/GNOME/mutter"
arch=(x86_64)
license=(GPL)
depends=(dconf gobject-introspection-runtime gsettings-desktop-schemas libcanberra
         startup-notification zenity libsm gnome-desktop upower libxkbcommon-x11
         gnome-settings-daemon libgudev libinput pipewire xorg-server-xwayland gnome-shell)
makedepends=(gobject-introspection git egl-wayland meson xorg-server)
checkdepends=(xorg-server-xvfb)
provides=(mutter)
conflicts=(mutter)
groups=(gnome)
_commit=00b4556051345f0e7cbf714f24100b3ee8cc5ddb  # master
source=("$pkgname::git+https://gitlab.gnome.org/GNOME/mutter.git#commit=$_commit"
         216.patch
        revert.patch)
sha256sums=('SKIP'
            'ed4f3cf738a3cffdf8a6e1a352bf24d74078c3b26fb9262c5746e0d95b9df756'
            '2d2e305e0a6cca087bb8164f81bdc0ae7a5ca8e9c13c81d7fd5252eb3563fc09')

pkgver() {
  cd $pkgname

  git describe --tags | sed 's/-/+/g'
}

prepare() {
  cd $pkgname

  ## Unmerged performance bits
  # Commented multiline comment start, remove the # below to disable the patches
  # : '

  git remote add vanvugt https://gitlab.gnome.org/vanvugt/mutter.git || true
  git fetch vanvugt

  # Geometric (GPU-less) picking
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/189
  git cherry-pick d774fb22

  # clutter-stage-cogl: Reduce output latency and reduce missed frames too [performance]
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/281
  git cherry-pick df73e736^..e0262aac

  # Consolidate all frame throttling into clutter-stage-cogl [performance]
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/363
  # incompatible with !281 atm
  # git cherry-pick 7e4270de^..27f669d0

  # clutter-actor: Add detail to captured-event signal [performance]
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/283
  git cherry-pick a20a0d7a

  # clutter: Deliver events sooner when possible
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/168
  # Disabled by default as causes lag when moving a window around
  # git cherry-pick ae8fc614


  # Resource scale computation optimizations
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/493
  git cherry-pick 3aa449af^..1017ce44

  # Add experimental key for RT scheduling
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/460
  git cherry-pick b49640c4^..a18d6901

  # cogl: Enable EGL_IMG_context_priority
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/454
  git cherry-pick 14a27e87^..a40d7927

  # WIP: renderer-native: Accept frames without ever blocking
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/73
  # does not compile yet
  # git cherry-pick 35ec0eaf^..202530c9

  # '
  # Commented multiline comment end, remove the # above if disabling the patches

  # Revert offending commit
  if [ -n "$_revert" ]; then
    patch -Np1 -i ../revert.patch
  fi

  # cogl-winsys-glx: Fix frame notification race/leak [performance]
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/216
  git apply -3 ../216.patch
}

build() {
  arch-meson $pkgname build \
    -D egl_device=true \
    -D wayland_eglstream=true \
    -D installed_tests=false
  ninja -C build
}

: ' not working atm
check() (
  mkdir -p -m 700 "${XDG_RUNTIME_DIR:=$PWD/runtime-dir}"
  glib-compile-schemas "${GSETTINGS_SCHEMA_DIR:=$PWD/build/data}"
  export XDG_RUNTIME_DIR GSETTINGS_SCHEMA_DIR

  dbus-run-session xvfb-run -s '+iglx -noreset' meson test -C build
)
'

package() {
  DESTDIR="$pkgdir" meson install -C build
}
