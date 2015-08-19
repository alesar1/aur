# Maintainer: Chris Severance aur.severach AatT spamgourmet.com
# Maintainer:  jyantis <yantis@yantis.net>

# This package is designed so that these PKGBUILD are easy to sync with Midnight Commander:
#  aws-cli & aws-cli-git
#  python-botocore & python-botocore-git

# TODO: Do we need split packages for python2 (see python-wheel for example)

# Note: the primary use of this package is with aws-cli

set -u
_pkgname='botocore'
pkgname="python-${_pkgname}-git"
pkgver=1.1.8.r2097.g9325508
pkgrel=1
pkgdesc='A low-level interface to a number of Amazon Web Services. This is the foundation for the AWS CLI as well as boto3'
arch=('any')
url="https://github.com/boto/${_pkgname}"
license=('Apache') # Apache License 2.0
depends=('python' # See setup.py, README.rst, and requirements.txt for version dependencies
  'python-bcdoc<0.15.0'    # AUR
  'python-wheel>=0.24.0'   # AUR ==
  'python-jmespath>=0.7.1' # AUR == is possible for repositories. Makes upgrades impossible in AUR.
  'python-tox>=1.4'        # COM == is possible because this is from a repository. Unfortunatley Arch isn't the primary dev environment for botocore/aws so our packages are likely to be newer.
  'python-sphinx>=1.1.3' #'python-sphinx<1.3'     # COM Arch is already newer. Documentation might not work.
  'python-dateutil>=2.1' 'python-dateutil<3.0.0' # COM
  'python-nose>=1.3.0'     # COM ==
  'python-mock>=1.0.1'     # COM ==
  'python-docutils>=0.10'  # COM
  'python-six>=1.1.0'      # COM This is in the sources but I'm not sure where the version comes from.
)
makedepends=('python-distribute') # same as python-setuptools
conflicts=('python2-botocore')
source=("${_pkgname}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz")
sha256sums=('338fed0119d819a60b2b7cf1a1a38f93603c5f012a2a483b713425816a43a57c')

if [ "${pkgname%-git}" != "${pkgname}" ]; then # this is easily done with case
  _srcdir="${_pkgname}"
  makedepends+=('git')
  provides+=("${pkgname%-git}=${pkgver%%.r*}")
  conflicts+=("${pkgname%-git}")
  source=("${_srcdir}::git+${url}.git")
  :;sha256sums=('SKIP')
pkgver() {
  set -u
  cd "${_srcdir}"
  printf '%s.r%s.g%s' "$(sed -ne "s:__version__ = '\(.*\)'"'$:\1:p' 'botocore/__init__.py')" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)" # "
  set +u
}
else
  _srcdir="${_pkgname}-${pkgver}"
  _verurl="${url}/releases"
  _versed="${url#*github.com}/archive/\(.*\)\.tar\.gz" # used with ^...$
  _veropt='l'
fi

build() {
  set -u
  cd "${_srcdir}"
  python setup.py build
  set +u
}

check() {
  set -u
  cd "${_srcdir}"
  python setup.py test --verbose
  set +u
}

package() {
  # set -u # not compatible with msg and makepkg --nocolor
  cd "${_srcdir}"

  python setup.py install --root="${pkgdir}" --optimize=1

  msg 'Install Documentation'
  install -Dpm644 'README.rst' 'requirements.txt' -t "${pkgdir}/usr/share/doc/${pkgname%-git}/"

  msg 'Install LICENSE.'
  install -Dpm644 'LICENSE.txt' "${pkgdir}/usr/share/licenses/${pkgname%-git}/LICENSE"

  # Do not include the tests/ generated from the install
  # rm -Rfv "${pkgdir}"/usr/lib/python*/site-packages/tests
  # set +u # not compatible with msg and makepkg --nocolor
}
set +u

# vim:set ts=2 sw=2 et:
