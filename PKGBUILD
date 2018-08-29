# Maintainer:  Chris Severance aur.severach aATt spamgourmet dott com
# Maintainer:  Lone_Wolf <lonewolf@xs4all.nl>
# Contributor: Steven She <mintcoffee@gmail.com>
# Contributor: vbPadre <vbPadre@gmail.com>

# TODO: cndrvcups-common-lb and cndrvcups-lb should be a single split package

set -u
pkgbase='cndrvcups-common-lb'
pkgname="${pkgbase}"
# used this name to avoid conflict with the existing cndrvcups-common (no longer in aur) which was wrong version for cndrvcups-lb
#_pkgname='cndrvcups-common'
#_pkgver='3.40'; _commonver='3.80'; _dl='8/0100002708/17'
#_pkgver='3.50'; _commonver='3.90'; _dl='8/0100007658/05'
_pkgver='3.60'; _commonver='4.00'; _dl='0/0100009240/02'

pkgver="${_commonver}"
pkgrel='1'
pkgdesc='common printer driver modules for Canon cndrvcups-lb package, built from source'
arch=('i686' 'x86_64')
# Direct links to the download reference go bad on the next version. We want something that will persist for a while.
url='https://www.canon-europe.com/support/products/imagerunner/imagerunner-1730i.aspx'
#url='https://www.usa.canon.com/internet/portal/us/home/support/details/printers/black-and-white-laser/mf212w/imageclass-mf212w'
license=('GPL' 'MIT' 'custom')
depends=('libglade')
depends_i686=('gcc-libs')
depends_x86_64=("${depends_i686[@]/#/lib32-}")
makedepends=('autoconf' 'automake')
makedepends+=('glib2' 'gtk2')
options=('!emptydirs' '!strip')
options+=('staticlibs')
_srcdir="${pkgname%-lb}-${pkgver}"
source=(
  "http://gdlp01.c-wss.com/gds/${_dl}/linux-UFRII-drv-v${_pkgver//\./}-uken.tar.gz"
)
sha256sums=('a5bf2c2d53049ad64acf2ed8b6dc954ff261c4b996ce1cc81471e5baaf5e40cd')
sha512sums=('c8b2abb2d0e9ccf972241dda5154c0ddd1ba9cfe6c721c242c40c90cf29e8d0b2c6a559907318cd191232f699a42425cc4148aebcaab6aa111f1cb5439777ce7')

# build instructions are adapted from upstream file
# cndrvcups-common.spec

prepare() {
  set -u
  bsdtar -xf "linux-UFRII-drv-v${_pkgver//\./}-uken/Sources/${_srcdir}-1.tar.gz"
  set +u
}

_setvars() {
  declare -A _lib32dirs=([i686]='lib' [x86_64]='lib32')
  _vars=(
    _bindir='/usr/bin'
    libs32="/usr/${_lib32dirs[${CARCH}]}"
    _libdir='/usr/lib'
    _prefix='/usr'
    _includedir='/usr/include'
    locallibs='/usr/lib/'
  )
}

build() {
  set -u

  cd "${_srcdir}"
  sed -e '2a export LIBS="-lgtk-x11-2.0 -lgobject-2.0 -lglib-2.0 -lgmodule-2.0"' -i 'cngplp/autogen.sh'
  local _vars; _setvars
  sed -n -e '/^%setup/,/^%install/ p' cndrvcups-*.spec | \
  sed -e 's:^%build:'"cd '${srcdir}/${_srcdir}' # &:g" | \
  grep -v '^%' | \
  sed -e 's:%{:${:g' \
      -e 's:^./autogen.sh\b:autoreconf -i\n& --prefix=${_prefix}:g ' \
  | env "${_vars[@]}" \
  sh -e -u -x --

  set +u
}

package() {
  set -u

  cd "${_srcdir}"

  local _vars; _setvars
  sed -n -e '/^%install/,/^%clean/ p' cndrvcups-*.spec | \
  grep -v '^%' | \
  sed -e 's:%{:${:g' \
      -e 's:${RPM_BUILD_ROOT}:"&":g' \
  | env RPM_BUILD_ROOT="${pkgdir}" \
  "${_vars[@]}" \
  sh -e -u -x --

  _fin

  set +u
}

_fin() {
  # according to Gentoo ebuild v2.90 c3pldrv dlopens the absolute path
  # /usr/lib/libc3pl.so
  if [ "${CARCH}" = 'x86_64' ]; then
    ln -s '../lib32/libc3pl.so' -t "${pkgdir}/usr/lib/"
  fi

  cd "${srcdir}/${_srcdir}"
  if [ "$(vercmp "${pkgver}" '3.50')" -lt 0 ]; then
    install -Dpm644 LICENSE-* -t "${pkgdir}/usr/share/licenses/${pkgname}/"
  else
    local _lics=(
      $(find -type 'f' -name 'LICENSE.txt')
    )
    local _lic _licd _lico
    for _lic in "${_lics[@]}"; do
      _licd="$(dirname "${_lic}")"
      _licd="$(basename "${_licd}")"
      _lico="LICENSE.${_licd}.txt"
      echo "license ${_lico}"
      install -Dpm644 "${_lic}" "${pkgdir}/usr/share/licenses/${pkgname}/${_lico}"
    done
  fi
  install -Dpm644 README* -t "${pkgdir}/usr/share/doc/${pkgname}/"

  # The filter works in /usr/bin but it's expected in .../cups/filter/
  install -d "${pkgdir}/usr/lib/cups/filter/"
  ln -s '/usr/bin/c3pldrv' -t "${pkgdir}/usr/lib/cups/filter/"
}
set +u
