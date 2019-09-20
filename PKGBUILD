# Maintainer: Saren Arterius <saren@wtako.net>
# Maintainer: Térence Clastres <t.clastres@gmail.com>

# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Maintainer: Ionut Biru <ibiru@archlinux.org>
# Contributor: Michael Kanis <mkanis_at_gmx_dot_de>

pkgname=mutter-performance
pkgver=3.34.0+14+g0e69fe078
pkgrel=2
pkgdesc="A window manager for GNOME | Attempts to improve performances with non-upstreamed merge-requests and frequent stable branch resync"
url="https://gitlab.gnome.org/GNOME/mutter"
arch=(x86_64)
license=(GPL)
depends=(dconf gobject-introspection-runtime gsettings-desktop-schemas libcanberra
         startup-notification zenity libsm gnome-desktop upower libxkbcommon-x11
         gnome-settings-daemon libgudev libinput pipewire xorg-server-xwayland)
makedepends=(gobject-introspection git egl-wayland meson xorg-server "sysprof>=3.34")
checkdepends=(xorg-server-xvfb)
options=(debug !strip)
provides=(mutter mutter-781835-workaround)
conflicts=(mutter)
replaces=(mutter-781835-workaround)
groups=(gnome)
_commit=0e69fe07819a289f3156f18c46b749b2f128cf05  # master
source=("$pkgname::git+https://gitlab.gnome.org/GNOME/mutter.git#commit=$_commit"
	429.diff)
sha256sums=('SKIP'
            'c22bc32ab8a29e3da986f386d14a8376f1985c051328ca6786571b4b67ec9e48')

pkgver() {
  cd $pkgname
  git describe --tags | sed 's/-/+/g'
}

hash_of() {
  git log --oneline --all | grep "$1" | tail -n 1 | awk '{print $1}'
}

git_cp_by_msg() {
  # Comment: Saren found a way to fetch hash based on commit name. It's controversial but might be interesting to create a function to call for each MR to not have to update the hash at each rebase.
  h_first=$(hash_of "$2")
  if [[ -n "$3" ]]; then
    h_last=$(hash_of "$3")
    echo "Found $h_first^$h_last for $1"
    git cherry-pick -n -Xtheirs $h_first^..$h_last
  else
    echo "Found $h_first for $1"
    git cherry-pick -n -Xtheirs $h_first
  fi
}

prepare() {
  cd $pkgname

  ### Adding and fetching remotes providing the selected merge-requests

  git cherry-pick --abort || true
  git remote add vanvugt https://gitlab.gnome.org/vanvugt/mutter.git || true
  git fetch vanvugt
  git remote add verdre https://gitlab.gnome.org/verdre/mutter.git || true
  git fetch verdre

  ### Merge Requests

  # Merge Request Prototype
  # Title:
  # URL:
  # Type:
  # Status:
  # Comment:
  # git cherry-pick -n first_commit^..last_commit
  #
  # Possible Status:
  #   1. Needs rebase: Conflicts with master branch.
  #   2. Needs review: Mutter maintainers needs to review the new/updated MR and provide feedback.
  #   3. Needs changes: MR needs to be adjusted based on maintainers feedback.
  #   4. Merged: MR approved and it changes commited to master.
  #
  # Generally, a MR status oscillate between 2 and 3 and then becomes 4.
  #
  # Possible Type:
  #   1. Improvement: Makes an already existing feature behave better, more efficiently/reliably.
  #   2. Feature: Adds a new functionality.
  #   3. Fix: Regression/bug fix only available in master (not backported).
  #   4. Cleanup: Code styling improvement, function deprecation, rearrangement...

  # Title: clutter/stage: Only queue compressible events
  # URL: https://gitlab.gnome.org/GNOME/mutter/merge_requests/711
  # Type: 1
  # Status: 2
  # Comment: Replaces !168
  git_cp_by_msg '!711' 'clutter/device-manager-evdev: Update device modifiers before queuing' 'clutter/stage: Only queue compressible events'

  # Title: Resource scale computation optimizations
  # URL: https://gitlab.gnome.org/GNOME/mutter/merge_requests/493
  # Type: 1
  # Status: 3
  # Comment: Disabled because breaks the overview on Wayland. https://gitlab.gnome.org/GNOME/mutter/merge_requests/493#note_549833
  if [ -f "$HOME/.i_dont_use_wayland_on_gnome" ]; then
    echo "OK, you dont use wayland on gnome"
    git cherry-pick -n 3aa449af^..1017ce44
  fi

  # Title: Honour `CLUTTER_ACTOR_NO_LAYOUT` more efficiently
  # URL: https://gitlab.gnome.org/GNOME/mutter/merge_requests/575
  # Type: 1
  # Status: 2
  git_cp_by_msg '!575' 'clutter/stage: Add an API for shallow relayouts' 'clutter/actor: Use the new shallow relayout API'

  # Title: WIP: renderer-native: Accept frames without ever blocking
  # URL: https://gitlab.gnome.org/GNOME/mutter/merge_requests/73
  # Type: 1
  # Status: 1
  # Comment: Might be replaced: https://gitlab.gnome.org/GNOME/mutter/merge_requests/73#note_544784
  # git cherry-pick -n 35ec0eaf^..202530c9

  # Title: core: Only trigger MetaWorkspace::window-* on toplevel window types
  # URL: https://gitlab.gnome.org/GNOME/mutter/merge_requests/701
  # Type: 1
  # Status: 2
  # Comment:
  git cherry-pick -n d7f799bf

  # Title: clutter-stage-cogl: Use regions
  # URL: https://gitlab.gnome.org/GNOME/mutter/merge_requests/692
  # Type: 1
  # Status: 2 (Crashes GDM)
  # Comment:
  # git cherry-pick -n 1393cd7a^..0f5e3851

  # Title: clutter/stage: Update input devices right after doing a relayout
  # URL: https://gitlab.gnome.org/GNOME/mutter/merge_requests/429
  # Type: 1
  # Status: 1
  # git_cp_by_msg '!429' 'clutter/stage-cogl: Add method to check if ongoing repaint is clipped' 'clutter/stage: Use a device-manager method to update input devices'

  # Title: Remove pending_swaps counter
  # URL: https://gitlab.gnome.org/GNOME/mutter/merge_requests/719
  # Type: 1
  # Status: 2
  # Comment:
  git_cp_by_msg '!719' 'clutter/stage-cogl: Remove pending_swaps counter'

  # Title: Sync timelines to hardware vsync
  # URL: https://gitlab.gnome.org/GNOME/mutter/merge_requests/724
  # Type: 1
  # Status: 2
  # Comment:
  git_cp_by_msg '!724' 'clutter/stage: Add API to get_next_presentation_time' 'clutter/master-clock-default: Sync timelines to hardware vsync'
}

build() {
  arch-meson $pkgname build \
    -D egl_device=true \
    -D wayland_eglstream=true \
    -D installed_tests=false
  ninja -C build
}

check() (
  mkdir -p -m 700 "${XDG_RUNTIME_DIR:=$PWD/runtime-dir}"
  glib-compile-schemas "${GSETTINGS_SCHEMA_DIR:=$PWD/build/data}"
  export XDG_RUNTIME_DIR GSETTINGS_SCHEMA_DIR

  # Unexpected passes in conform test
  # Stacking test flaky
  dbus-run-session xvfb-run -s '+iglx -noreset' meson test -C build --print-errorlogs || :
)

package() {
  DESTDIR="$pkgdir" meson install -C build
}
