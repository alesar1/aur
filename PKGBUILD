# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Maintainer: Ionut Biru <ibiru@archlinux.org>
# Contributor: Michael Kanis <mkanis_at_gmx_dot_de>

# Patched package maintainer: Saren Arterius <saren@wtako.net>
# Patch origin: https://gist.github.com/DeadMetaler/12622bf9415c1100f2d436ffbd6778c6

### BUILD OPTIONS
# Set these variables to ANYTHING that is not null to enable them

### Revert offending commit, recommanded to leave disable if not using NVIDIA
_revert=


pkgname=mutter-781835-workaround
pkgver=3.32.1+3+g9a795d3d0
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
source=("$pkgname::git+https://gitlab.gnome.org/GNOME/mutter.git#branch=gnome-3-32"
        0001-wayland-output-Report-unscaled-size-even-in-logical-.patch
        216.patch
        revert.patch)
sha256sums=('SKIP'
            '842162bf8cec5d69fdb80c85fd152ddd3db6a9179d11d6f81d486f79814838c0'
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
  git cherry-pick -n d774fb22

  # Consolidate all frame throttling into clutter-stage-cogl [performance]
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/363
  # Conflict!
  # h_first=$(git log --oneline --all | grep 'clutter/stage-cogl: Remove magic numbers' | tail -n 1 | awk '{print $1}') # Sorry guys
  # h_last=$(git log --oneline --all | grep 'clutter/master-clock: Remove fallback throttles' | tail -n 1 | awk '{print $1}') # Sorry guys
  # echo "Found $h_first^$h_last for MR363"
  # git cherry-pick -n $h_first^..$h_last || zsh

  # clutter-stage-cogl: Reduce output latency and reduce missed frames too [performance]
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/281
  # first commit replaced by !363
  # Conflict!
  # hash=$(git log --oneline --all | grep 'clutter-stage-cogl: Reschedule update on present' | head -n 1 | awk '{print $1}') # Sorry guys
  # echo "Found $hash for MR281"
  # git cherry-pick -n $hash

  # clutter: Deliver events sooner when possible
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/168
  # still has issues with 1000Hz mice
  # git cherry-pick -n ae8fc614

  # Resource scale computation optimizations
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/493
  git cherry-pick -n 3aa449af^..1017ce44

  # Add experimental key for RT scheduling
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/460
  git cherry-pick -n b49640c4^..a18d6901

  # cogl: Enable EGL_IMG_context_priority
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/454
  git cherry-pick -n 3f29b478^..7df86fb2

  # WIP: renderer-native: Accept frames without ever blocking
  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/73
  # does not compile yet
  # git cherry-pick -n 35ec0eaf^..202530c9

  # '
  # Commented multiline comment end, remove the # above if disabling the patches

  # Revert offending commit
  if [ -n "$_revert" ]; then
    patch -Np1 -i ../revert.patch
  fi

  # https://bugzilla.mozilla.org/show_bug.cgi?id=1534089
  patch -Np1 -i ../0001-wayland-output-Report-unscaled-size-even-in-logical-.patch
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
