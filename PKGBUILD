# Maintainer: XZS <d.f.fischer at web dot de>
# Contributor: Diego Principe <cdprincipe@at@gmail@dot@com>
# This PKGBUILD is maintained on GitHub <https://github.com/dffischer/mozilla-extensions>.
# You may find it convenient to file issues and pull requests there.

pkgbase='firefox-theme-adwaita-git'
pkgname=('firefox-theme-gnome-git' 'firefox-extension-gnome-theme-tweak-git')
pkgver=42.1
pkgrel=1
pkgdesc="Adwaita theme for Firefox (Matches the default Gnome Shell theme)"
url="https://github.com/gnome-integration-team/firefox-gnome"
arch=('any')
license=('MPL')
depends=("firefox")
provides=('firefox-theme-adwaita')
conflicts=('firefox-theme-adwaita')
makedepends=('unzip' 'zip')

makedepends+=('git')
source+=("${_gitname:=${pkgname%-git}}::${_giturl:-git+$url}")
md5sums+=('SKIP')
provides+=("$_gitname=$pkgver")
conflicts+=("$_gitname")

# Move down repository content for easier access by following functions.
prepare() {
  cp -rf --reflink=auto "$_gitname"/* .
  rm -rf "$_gitname"
  find -name '.git*' -exec rm -rf '{}' +
}

makedepends+=(rasqal)

sparql() {
  roqet -e "PREFIX em: <http://www.mozilla.org/2004/em-rdf#> SELECT ?x WHERE { $1 }" \
    -D "${2:-install.rdf}" -r csv 2>/dev/null | tr -d '\r' | tail -n 1 | head -c -1
}

# Retrieve current compatibility information from install.rdf.
query-version() {
  sparql "[] em:id '$2' ; em:${1}Version ?x" install.rdf
}

pkgver() {
  cd "$_gitname"
  sed -n 's/.*"version"\s*:\s*"\([[:digit:].]*\)"\s*,.*/\1/p' \
    *.json 2>/dev/null | tr '\n' '.'
printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  ./make-xpi.py
}

# Version information for this extension is noted in the config.json and only
# inserted into the install.rdf, so overwriting this function directs it to the
# right location.
query-version() {
  sed -n "s/^ *\"$1-version\": \"\\([^\"]\+\\)\",\$/\\1/p" *.json
}

version-range() {
  local emid=$(emid $1)
  echo "$1>$(version min $emid)" "$1<$(version max $emid)"
}

emid() {
  case $1 in
    firefox)     echo '{ec8030f7-c20a-464f-9b0e-13a3a9e97384}' ;;
    thunderbird) echo '{3550f703-e582-4d05-9a08-453d09bdfdc6}' ;;
    *) return 1 ;;
  esac
}

version() {
  local version="$(query-version $1 $2)"
  if [[ $version =~ ([[:digit:]]+).\* ]]; then
    if [[ $1 = max ]]; then
      echo $(( ${BASH_REMATCH[1]} + 1 ))
    else
      echo "=${BASH_REMATCH[1]}"
    fi
  else
    echo "=$version"
  fi
}

prepare_target() {
  local target=${pkgname%%-*}
  id="$(sparql '<urn:mozilla:install-manifest> em:id ?x')"
  destdir="$pkgdir/usr/lib/${target/firefox/firefox\/browser}/extensions"
  install -d "$destdir"
}

package() {
  cd .build/$1
  prepare_target
  unzip -d "$destdir/$id" ../../gnome-firefox-$1.xpi
}

package_firefox-theme-gnome-git() {
  real_depends_theme

  package theme
}

# Hide the versioned dependency from .SRCINFO generation in a subfunction.
real_depends_theme() {
  depends+=($(version-range firefox))
}

package_firefox-extension-gnome-theme-tweak-git() {
  provides=('firefox-extension-gnome-theme-tweak')
  conflicts=('firefox-extension-gnome-theme-tweak')
  pkgdesc='Extension for customizing GNOME theme.'
  depends=('firefox-theme-gnome')
  real_depends_extension

  package extension
}

# Hide the versioned dependency from mksrcinfo, as the pkgver
# function has to update the value before it can be properly used.
real_depends_extension() {
  depends=("firefox-theme-gnome=$pkgver")
}
