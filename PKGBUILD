# Maintainer: Brenton Horne <brentonhorne77 at gmail dot com>
_pkgname=atom
_version=arch
_fusurl="https://github.com/fusion809"
_language_patch2_url="${_fusurl}/language-patch2"

# Module Versions
_language_archlinux_ver=0.2.15
_electron_ver=0.36.12

pkgname=${_pkgname}-editor-${_version}
_atomver=1.8.0
pkgver=1.8.0.arch0.2.15.e0.36.12
pkgrel=1
pkgdesc="Hackable text editor for the 21st Century, built using web technologies, with some extra packages for Arch Linux package development pre-installed."
arch=('x86_64' 'i686')
url='https://github.com/atom/atom'
license=('MIT')
depends=('namcap' 'pkgbuild-introspection' 'alsa-lib' 'desktop-file-utils' 'gconf' 'gtk2' 'libgnome-keyring' 'libnotify' 'libxtst' 'nodejs' 'nss' 'python2')
optdepends=('gvfs: file deletion support')
makedepends=('git' 'npm' 'hunspell-en')
conflicts=('atom-editor-bin' 'atom-editor-beta')
install=${_pkgname}-${_version}.install
source=("${_pkgname}-${_atomver}.tar.gz::${url}/archive/v${_atomver}.tar.gz"
"about-arch::git+${_fusurl}/about"
"git+https://github.com/Murriouz/dark-bint-syntax"
"git+${_fusurl}/fusion-ui"
"git+${_fusurl}/language-archlinux"
"git+${_fusurl}/language-gfm2"
"git+${_fusurl}/language-ini-desktop"
"git+https://github.com/puranjayjain/language-liquid"
"git+${_fusurl}/language-patch2"
"language-unix-shell::git+${_fusurl}/language-shellscript"
"git+${_fusurl}/mydict"
"platformio-ide-terminal::git+https://github.com/platformio/platformio-atom-ide-terminal"
"atom"
"atom.desktop"
"theme.patch")
md5sums=('158c18d35d071403db18bdd85fa2e738'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         '74cc026d4104072dadb2733745f1b268'
         '367f71ad1cfc2e03e97a48d2e32995fb'
         '23a0d25e1759dc5bd0e6f7101fd8ea70')

pkgver() {
  _language_archlinux_ver="$(sed -n "s/\"version\": //p" $srcdir/language-archlinux/package.json | sed 's/"//g' | sed 's/,//g' | sed 's/ //g')"
  printf "${_atomver}.arch${_language_archlinux_ver}.e${_electron_ver}"
}

prepare() {
  cd "$srcdir/${_pkgname}-${_atomver}"

  _about_arch_ver="$(sed -n "s/\"version\": //p" $srcdir/about-arch/package.json | sed 's/"//g' | sed 's/,//g' | sed 's/ //g')"
  _dark_bint_syntax_ver="$(sed -n "s/\"version\": //p" $srcdir/dark-bint-syntax/package.json | sed 's/"//g' | sed 's/,//g' | sed 's/ //g')"
  _fusion_ui_ver="$(sed -n "s/\"version\": //p" $srcdir/fusion-ui/package.json | sed 's/"//g' | sed 's/,//g' | sed 's/ //g')"
  _language_archlinux_ver="$(sed -n "s/\"version\": //p" $srcdir/language-archlinux/package.json | sed 's/"//g' | sed 's/,//g' | sed 's/ //g')"
  _language_gfm2_ver="$(sed -n "s/\"version\": //p" $srcdir/language-gfm2/package.json | sed 's/"//g' | sed 's/,//g' | sed 's/ //g')"
  _language_ini_desktop_ver="$(sed -n "s/\"version\": //p" $srcdir/language-ini-desktop/package.json | sed 's/"//g' | sed 's/,//g' | sed 's/ //g')"
  _language_liquid_ver="$(sed -n "s/\"version\": //p" $srcdir/language-liquid/package.json | sed 's/"//g' | sed 's/,//g' | sed 's/ //g')"
  _language_patch2_ver="$(sed -n "s/\"version\": //p" $srcdir/language-patch2/package.json | sed 's/"//g' | sed 's/,//g' | sed 's/ //g')"
  _language_unix_shell_ver="$(sed -n "s/\"version\": //p" $srcdir/language-unix-shell/package.json | sed 's/"//g' | sed 's/,//g' | sed 's/ //g')"
  _platformio_ide_terminal_ver="$(sed -n "s/\"version\": //p" $srcdir/platformio-ide-terminal/package.json | sed 's/"//g' | sed 's/,//g' | sed 's/ //g')"

  sed -i -e "/exception-reporting/d" \
         -e "/metrics/d" \
         -e "/atom-dark/d" \
         -e "/atom-light/d" \
         -e "/base16/d" \
         -e "/solarized/d" \
         -e "/one/d" \
         -e "s/0.36.8/${_electron_ver}/g" \
         -e "s/\"language-gfm\": \".*\",/\"language-gfm2\": \"${_language_gfm2_ver}\",\n    \"language-ini-desktop\": \"${_language_ini_desktop_ver}\",\n    \"language-liquid\": \"${_language_liquid_ver}\",\n    \"language-patch2\": \"${_language_patch2_ver}\",/g" \
         -e "/\"dependencies\": {/a \
                     \"language-patch2\": \"${_language_patch2_url}\"," \
         -e "s/\"language-shellscript\": \".*\",/\"language-unix-shell\": \"${_language_unix_shell_ver}\",\n    \"language-archlinux\": \"${_language_archlinux_ver}\",/g" \
         -e "s/\"about\": \".*\"/\"about-arch\": \"${_about_arch_ver}\"/g" \
         -e "/\"packageDependencies\": {/a \
              \"dark-bint-syntax\": \"${_dark_bint_syntax_ver}\",\n    \"fusion-ui\": \"${_fusion_ui_ver}\"," package.json

  chmod 755 -R package.json

  if ! [[ -d node_modules ]]; then
    mkdir -p node_modules
  else
    rm -rf node_modules/about-arch
  fi

  sed -i -e 's@node script/bootstrap@node script/bootstrap --no-quiet@g' \
  ./script/build || die "Fail fixing verbosity of script/build"

  # about-arch
  pushd $srcdir/about-arch
  git fetch -p
  git checkout -q $(git describe --tags `git rev-list --tags --max-count=1`)
  popd
  cp -a $srcdir/about-arch node_modules/about-arch

  sed -i -e "s/atom-editor/atom-editor-${_version}/g" node_modules/about-arch/lib/about-view.coffee
  sed -i -e "s/<%=Desc=%>/$pkgdesc/g" ${srcdir}/${_pkgname}.desktop

  patch -Np1 -i $srcdir/theme.patch
}

build() {
  cd "$srcdir/${_pkgname}-${_atomver}"
  export PYTHON=/usr/bin/python2
  until ./script/build --build-dir "$srcdir/atom-build"; do :; done
}

package() {
  cd "$srcdir/${_pkgname}-${_atomver}"

  script/grunt install --build-dir "$srcdir/atom-build" --install-dir "$pkgdir/usr"

  install -Dm755 $srcdir/${_pkgname} "$pkgdir/usr/bin/${_pkgname}"
  install -Dm644 $srcdir/${_pkgname}.desktop "$pkgdir/usr/share/applications/${_pkgname}.desktop"
  install -Dm644 resources/app-icons/stable/png/1024.png "$pkgdir/usr/share/pixmaps/atom.png"
  install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"

  install -Dm644 $srcdir/mydict/en_AU* "${pkgdir}/usr/share/atom/resources/app.asar.unpacked/node_modules/spell-check/node_modules/spellchecker/vendor/hunspell_dictionaries"
}
