# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: Rafael Cavalcanti <rccavalcanti at gmail dot com>
# Contributor: Jorge Barroso <jorge.barroso.11 at gmail dot com>
# Contributor: x-demon
pkgname=nicotine-plus-git
pkgver=3.2.0rc2.r6476.b5fa236a
pkgrel=1
pkgdesc="A graphical client for the SoulSeek peer-to-peer system"
arch=('any')
url="https://nicotine-plus.github.io/nicotine-plus"
license=('GPL3')
depends=('python-gobject' 'gtk3')
makedepends=('appstream' 'git' 'python-setuptools')
optdepends=('gspell: for spell checking in chat'
            'libappindicator-gtk3: option for tray icon'
            'libayatana-appindicator: option for tray icon'
            'gtk4: test the GTK4 version'
            'libadwaita: test the GTK4 version')
checkdepends=('appstream-glib' 'desktop-file-utils' 'python-pytest-xvfb')
provides=("${pkgname%-git}" 'nicotine+' 'nicotine')
conflicts=("${pkgname%-git}" 'nicotine+' 'nicotine')
source=('git+https://github.com/Nicotine-Plus/nicotine-plus.git'
        'org.nicotine_plus.Nicotine-gtk4.desktop'
        'org.nicotine_plus.Nicotine-gtk4-libadwaita.desktop')
sha256sums=('SKIP'
            'e92495dfede12d88797fe0bcaa03517399da6e0f8411b567005f65cb571aa97f'
            '7d2c37f0c5e3572948a187c358e4011b9292a8d3f2d9b685c30bfc86aa098ccc')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  printf "%s.r%s.%s" "$(python setup.py --version)" \
    "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/${pkgname%-git}"
  python setup.py build
}

check() {
  cd "$srcdir/${pkgname%-git}"
  _appdata_id=org.nicotine_plus.Nicotine

  # Some tests require an X server
  _display=":70"
  Xvfb ${_display} -screen 0 1024x768x24 -ac -noreset & xpid=$!
  trap "kill -TERM $xpid || :" EXIT
  sleep 3
  export DISPLAY=${_display}

  # Tests requiring an Internet connection are disabled
  pytest --deselect=test/unit/test_version.py

  desktop-file-validate data/${_appdata_id}.desktop
  appstream-util validate-relax --nonet data/${_appdata_id}.metainfo.xml
}

package() {
  cd "$srcdir/${pkgname%-git}"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build

  install -Dm644 "$srcdir"/org.nicotine_plus.Nicotine{-gtk4.desktop,-gtk4-libadwaita.desktop} -t \
    "$pkgdir/usr/share/applications/"

  # Remove duplicate GPL license
  rm "$pkgdir/usr/share/doc/nicotine/COPYING"
}
