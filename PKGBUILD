pkgname="gnome-shell-extension-laine-git"
pkgdesc="Gnome extension which allows the control of the volume of individual applications as well as a more in depth control of mpris aware applications from a single applet"
pkgver=3.26.10.r0.gd0c9774
pkgrel=1
arch=(any)
url="https://github.com/johnhoran/Laine"
license=(GPLv2)

makedepends+=('git')
source+=("${_gitname:=${pkgname%-git}}::${_giturl:-git+$url}")
md5sums+=('SKIP')
provides+=($_gitname)
conflicts+=($_gitname)

pkgver() {
  cd ${_gitname:-$pkgname}
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
  [ ${PIPESTATUS[0]} -ne 0 ] && \
printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

depends[gnomeshell]=gnome-shell

package_20_version() {
  local compatibles=($(\
    find -path ./pkg -type d -prune -o \
    -name metadata.json -exec grep -Pzo '(?s)(?<="shell-version": \[)[^\[\]]*(?=\])' '{}' \; | \
    tr '\n," ' '\n' | sed 's/3\.//g;/^$/d' | sort -n -t. -k 1,1))
  depends+=("gnome-shell>=3.${compatibles[0]}")
  local max="${compatibles[-1]}"
  if [ "3.$max" != $(
    gnome-shell --version | grep -Po '(?<=GNOME Shell 3\.)[[:digit:]]+'

  ) ]; then
    depends+=("gnome-shell<3.$((${max%%.*} + 1))")
  fi
  unset depends[gnomeshell]
}

package() {
  for function in $(declare -F | grep -Po 'package_[[:digit:]]+[[:alpha:]_]*$')
  do
    $function
  done
}

package_01_locate() {
  msg2 'Locating extension...'
  cd "$(dirname $(find -name 'metadata.json'))"
  extname=$(grep -Po '(?<="uuid": ")[^"]*' metadata.json)
  destdir="$pkgdir/usr/share/gnome-shell/extensions/$extname"
}

package_02_install() {
  msg2 'Installing extension code...'
  find -maxdepth 1 \( -iname '*.js*' -or -iname '*.css' -or -iname '*.ui' \) -exec install -Dm644 -t "$destdir" '{}' +
}

if [ -z "$install" ]
then
  install=gschemas.install
fi

package_10_schemas() {
  msg2 'Installing schemas...'
  find -name '*.xml' -exec install -Dm644 -t "$pkgdir/usr/share/glib-2.0/schemas" '{}' +
}

depends+=(gnome-shell-extensions)

package_03_unify_conveniencejs() {
  ln -fs \
    ../user-theme@gnome-shell-extensions.gcampax.github.com/convenience.js \
    "$destdir/convenience.js"
}
