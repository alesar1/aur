# Maintainer: Jan Alexander Steffens (heftig) <heftig@archlinux.org>
# Patched package maintainer: Saren Arterius <saren@wtako.net>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Flamelab <panosfilip@gmail.com


### MERGE REQUESTS SELECTION

# available MR: ('536' '786' '923' '1440')
_merge_requests_to_use=()

### IMPORTANT: Do no edit below this line unless you know what you're doing


pkgname=gnome-shell-performance
_pkgname=gnome-shell
pkgver=40.1
pkgrel=2
epoch=1
pkgdesc="Next generation desktop shell"
url="https://wiki.gnome.org/Projects/GnomeShell"
arch=(x86_64)
license=(GPL)
depends=(accountsservice gcr gjs gnome-bluetooth upower gnome-session gtk4
         gnome-settings-daemon gnome-themes-extra gsettings-desktop-schemas
         libcanberra-pulse libgdm libsecret mutter nm-connection-editor unzip
         gstreamer libibus gnome-autoar gnome-disk-utility gst-plugin-pipewire)
makedepends=(gtk-doc gnome-control-center evolution-data-server
             gobject-introspection git meson sassc asciidoc bash-completion)
checkdepends=(xorg-server-xvfb)
optdepends=('gnome-control-center: System settings'
            'evolution-data-server: Evolution calendar integration')
groups=(gnome)
provides=(gnome-shell gnome-shell=$pkgver gnome-shell=$epoch:$pkgver)
conflicts=(gnome-shell)
install=$pkgname.install
_commit=8e644ec39b5ac5b3fd22ceff3a7c0f8d897aa1da  # tags/40.1^0
source=("git+https://gitlab.gnome.org/GNOME/gnome-shell.git#commit=$_commit"
        "git+https://gitlab.gnome.org/GNOME/libgnome-volume-control.git")
sha256sums=('SKIP'
            'SKIP')

pkgver() {
  cd $_pkgname
  git describe --tags | sed 's/-/+/g'
}

pick_mr() {
  for mr in "${_merge_requests_to_use[@]}"; do
    if [ "$1" = "$mr" ]; then
      if [ "$2" = "merge" ] || [ -z "$2" ]; then
        echo "Downloading then Merging $1..."
        curl -O "https://gitlab.gnome.org/GNOME/gnome-shell/-/merge_requests/$mr.diff"
        git apply "$mr.diff"
      elif [ "$3" = "revert" ]; then
        echo "Reverting $1..."
        git revert "$2" --no-commit
      elif [ "$3" = "patch" ]; then
	if [ -e ../"$2" ]; then 
          echo "Patching with $2..."
          patch -Np1 -i ../"$2"
        else
          echo "Downloading $mr as $2 then patching..."
          curl -O "https://gitlab.gnome.org/GNOME/gnome-shell/-/merge_requests/$mr.diff" -o "$2"
          patch -Np1 -i "$2"
        fi
      else
        echo "ERROR: wrong argument given: $2"
      fi
      break
    fi
  done
}

prepare() {
  cd $_pkgname

  # https://bugs.archlinux.org/task/70851
  # https://gitlab.gnome.org/GNOME/gnome-shell/-/merge_requests/1850
  git cherry-pick -n d9239e2cee27cad582544e769ad794ca571f35fb

  ### Adding and fetching remotes providing the selected merge-requests
  ### Only needed when there is no MR opened

  git reset --hard
  git cherry-pick --abort || true

  # git remote add verde https://gitlab.gnome.org/verdre/gnome-shell.git || true
  # git fetch verde
  # git remote add 3v1n0 https://gitlab.gnome.org/3v1n0/gnome-shell || true
  # git fetch 3v1n0
  # git remote add vanvugt https://gitlab.gnome.org/vanvugt/gnome-shell.git || true
  # git fetch vanvugt

  ### Merge Requests

  # Merge Request Prototype
  # Title:
  # URL:
  # Type:
  # Status:
  # Comment:
  # git cherry-pick -n first_commit^..last_commit
  #
  # Possible Type:
  #   1. Improvement: Makes an already existing feature behave better, more efficiently/reliably.
  #   2. Feature: Adds a new functionality.
  #   3. Fix: Regression/bug fix only available in master (not backported).
  #   4. Cleanup: Code styling improvement, function deprecation, rearrangement...
  #
  # Possible Status:
  #   1. Needs rebase: Conflicts with master branch.
  #   2. Needs review: Mutter maintainers needs to review the new/updated MR and provide feedback.
  #   3. Needs changes: MR needs to be adjusted based on maintainers feedback.
  #   4. Merged: MR approved and it changes commited to master.
  #
  # Generally, a MR status oscillate between 2 and 3 and then becomes 4.


  # Title: St theme: use css instance data
  # URL: https://gitlab.gnome.org/GNOME/gnome-shell/merge_requests/536
  # Type: 2
  # Status: 1
  # Comment: Crash fix for st_theme_get_custom_stylesheets
  pick_mr '536'

  # Title: Some fixes for setting key focus of the closeDialog
  # URL: https://gitlab.gnome.org/GNOME/gnome-shell/merge_requests/786
  # Type: 3
  # Status: 1
  # Comment:
  pick_mr '786'

  # Title: js/ui: Keep refcounts to WallClock objects above 1. [performance]
  # URL: https://gitlab.gnome.org/GNOME/gnome-shell/merge_requests/923
  # Type: 1
  # Status: 2
  # Comment: Unlock freezes, it hits me too.
  pick_mr '923'

  # Avoid missing/broken app launch animations
  # URL: https://gitlab.gnome.org/GNOME/gnome-shell/merge_requests/1440
  # Type: 3
  # Status: 2
  # Comment:
  pick_mr '1440'

  git submodule init
  git submodule set-url subprojects/gvc "$srcdir/libgnome-volume-control"
  git submodule update
}

build() {
  arch-meson $_pkgname build -D gtk_doc=true
  meson compile -C build
}

check() (
  mkdir -p -m 700 "${XDG_RUNTIME_DIR:=$PWD/runtime-dir}"
  export XDG_RUNTIME_DIR

  dbus-run-session xvfb-run \
    -s '-screen 0 1920x1080x24 -nolisten local +iglx -noreset' \
  meson test -C build --print-errorlogs
)

package() {
  depends+=(libmutter-8.so)
  meson install -C build --destdir "$pkgdir"
}
