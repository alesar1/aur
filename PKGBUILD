# Maintainer: GreenRaccoon23 <GreenRaccoon a t gmail d o t com>

# NOTE!
#   Install 'archdroid-icon-theme' instead of this package.
#
# OTHER NOTES:
# This is the git variant of 'archdroid-icon-theme'.
#
# This git variant is NOT a newer release than 'archdroid-icon-theme';
#   both packages are always updated at the same time.
#   This one is merely an alternative in case the other fails to install.
# The non-git variant downloads and installs MUCH faster than this one:
#   'archdroid-icon-theme' == 1MB download (xz archive),
#   'archdroid-icon-theme-git' == 40MB download (full git clone/gz archive).
# In other words, download 'archdroid-icon-theme' instead of this package,
#   unless you have a specific reason otherwise
#   (e.g., 'archdroid-icon-theme' doesn't download correctly).
#
# If you find any problems or have any suggestions, ideas, or requests,
#   by all means, PLEASE let me know.
#   You can do that here:
#     'https://github.com/GreenRaccoon23/archdroid-icon-theme/issues'
#   I'd really appreciate your feedback,
#     and I will most likely implement any additions you request.

pkgname=archdroid-icon-theme-git
pkgver=r94.69a594d
pkgrel=1
pkgdesc="Port of Android 5.0 Lollipop's material design icons to Arch."
arch=('any')
url="https://github.com/GreenRaccoon23/${pkgname%-*}"
license=('GPL3')
makedepends=('intltool' 'librsvg' 'gtk-update-icon-cache')
provides=("${pkgname%-*}" "${pkgname}")
conflicts=("${pkgname%-*}" "${pkgname}")
#options=('!strip')
install="${pkgname%-*}.install"
source=("git+https://github.com/GreenRaccoon23/${pkgname%-*}.git")
md5sums=("SKIP")

_error2() {
  for e; do
    echo "    ${e}";
  done;
}

pkgver() {
  cd "$srcdir/${pkgname%-*}"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
  if fc-list | grep Roboto >/dev/null; then
    return;
  fi;

  error "Required font 'Roboto' is not installed."
  error "Please install a font package which includes 'Roboto', such as:"
  _error2 ttf-roboto ttf-roboto-font ttf-google-fonts-git ttf-google-fonts-hg otf-google-fonts-hg;
  return 1;
}

package() {
  msg2 "Installing ${pkgname%-*}..." ;
  cd "${pkgname%-*}/${pkgname%-*}";
  install -dm 755 "${pkgdir}"/usr/share/icons/;
  cp -drf --no-preserve='ownership' . "${pkgdir}"/usr/share/icons/;
}
