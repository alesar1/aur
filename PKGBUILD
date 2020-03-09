# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Patched package maintainer: Saren Arterius <saren@wtako.net>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Flamelab <panosfilip@gmail.com

pkgname=gnome-shell-performance
_pkgname=gnome-shell
pkgver=3.36.0
pkgrel=1
epoch=1
pkgdesc="Next generation desktop shell"
url="https://wiki.gnome.org/Projects/GnomeShell"
arch=(x86_64)
license=(GPL2)
depends=(accountsservice gcr gjs gnome-bluetooth upower gnome-session gnome-settings-daemon
         gnome-themes-extra gsettings-desktop-schemas libcanberra-pulse libgdm libsecret
         mutter nm-connection-editor unzip gstreamer libibus gnome-autoar)
makedepends=(gtk-doc gnome-control-center evolution-data-server gobject-introspection git meson
             sassc asciidoc)
optdepends=('gnome-control-center: System settings'
            'evolution-data-server: Evolution calendar integration')
groups=(gnome)
provides=(gnome-shell gnome-shell=$pkgver)
conflicts=(gnome-shell)
install=$pkgname.install
_commit=4baa091bc54856b191394c70bcedcd3fb4d1a2b5  # tags/3.36.0^0
source=("git+https://gitlab.gnome.org/GNOME/gnome-shell.git#commit=$_commit"
        "git+https://gitlab.gnome.org/GNOME/libgnome-volume-control.git")
sha256sums=('SKIP'
            'SKIP')

pkgver() {
  cd $_pkgname
  git describe --tags | sed 's/-/+/g'
}

hash_of() {
  git log --oneline --all | grep "$1" | tail -n 1 | awk '{print $1}'
}

git_cp_by_msg() {
  # Comment: Saren found a way to fetch hash based on commit name. It's controversial but might be interesting to create a function to call for each MR to not have to update the hash at each>
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
  cd $_pkgname

  ### Adding and fetching remotes providing the selected merge-requests

  git cherry-pick --abort || true
  # git remote add verde https://gitlab.gnome.org/verdre/gnome-shell.git || true
  # git fetch verde
  git remote add 3v1n0 https://gitlab.gnome.org/3v1n0/gnome-shell || true
  git fetch 3v1n0
  git remote add vanvugt https://gitlab.gnome.org/vanvugt/gnome-shell.git || true
  git fetch vanvugt

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

  # Title: St theme: use css instance data
  # URL: https://gitlab.gnome.org/GNOME/gnome-shell/merge_requests/536
  # Type: 2
  # Status: 3
  # Comment: Crash fix for st_theme_get_custom_stylesheets
  git_cp_by_msg '!536' 'st-theme: Use CRStyleSheet app_data instead of hash map' 'st-theme: Use glib auto free/ptr features'

  # Title: Some fixes for setting key focus of the closeDialog
  # URL: https://gitlab.gnome.org/GNOME/gnome-shell/merge_requests/786
  # Type: 3
  # Status: 2
  # Comment:
  git cherry-pick -n 184ce007^..c328f4f3

  # Title: js/ui: Keep refcounts to WallClock objects above 1. [performance]
  # URL: https://gitlab.gnome.org/GNOME/gnome-shell/merge_requests/923
  # Type: 1
  # Status: 2
  # Comment: Unlock freezes, it hits me too.
  # git_cp_by_msg '!923' 'js/ui: Keep refcounts to WallClock objects above 1.'

  # Title: js/ui: Subscribe touchpad gesture handlers to only touchpad events [performance]
  # URL: https://gitlab.gnome.org/GNOME/gnome-shell/merge_requests/925
  # Type: 1
  # Status: 1
  # Comment:
  # git_cp_by_msg '!925' 'js/ui: Subscribe touchpad gesture handlers to only touchpad events'
  # git cherry-pick -n 30a25112

  # Title: iconGrid.js: Animate icon spring using translation [performance]
  # URL: https://gitlab.gnome.org/GNOME/gnome-shell/merge_requests/926
  # Type: 1
  # Status: 3
  # Comment:
  git_cp_by_msg '!926' 'iconGrid.js: Animate icon spring using translation'

  # Title: workspace: Animate window clones using translation properties
  # URL: https://gitlab.gnome.org/GNOME/gnome-shell/merge_requests/936
  # Type: 1
  # Status: 2
  # Comment:
  git_cp_by_msg '!936' 'dnd: Make DND translation-property-aware' 'workspace: Animate window clones using translation properties'

  # Title: workspace: Animate window clones using translation properties
  # URL: https://gitlab.gnome.org/GNOME/gnome-shell/merge_requests/936
  # Type: 1
  # Status: 2
  # Comment:
  git_cp_by_msg '!936' 'dnd: Make DND translation-property-aware' 'workspace: Animate window clones using translation properties'

  # Title: overviewControls: Use ClutterActor's translation-x
  # URL: https://gitlab.gnome.org/GNOME/gnome-shell/merge_requests/948
  # Type: 1
  # Status: 4
  # Comment:
  git_cp_by_msg '!948' "overviewControls: Use ClutterActor's translation-x"

  git submodule init
  git submodule set-url subprojects/gvc "$srcdir/libgnome-volume-control"
  git submodule update
}

build() {
  arch-meson $_pkgname build -D gtk_doc=true
  ninja -C build
}

package() {
  depends+=(libmutter-6.so)
  DESTDIR="$pkgdir" meson install -C build
}
