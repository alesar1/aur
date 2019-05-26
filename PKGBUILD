# Maintainer: Chris Severance aur.severach AatT spamgourmet.com
# Maintainer: Ainola
# Contributor: Chris Fordham

# This package is designed so that these PKGBUILD are easy to sync with Midnight Commander:
#  aws-cli & aws-cli-git
#  python-botocore & python-botocore-git

# Note: the primary use of this package is with aws-cli

# Use mcdiff to watch for changes
_fn_foobar() {
local _foobar="
#requirements-docs.txt
Sphinx>=1.1.3,<1.3
guzzle_sphinx_theme>=0.7.10,<0.8

#requirements.txt
tox>=2.5.0,<3.0.0
python-dateutil>=2.1,<2.7.0; python_version=="2.6"
python-dateutil>=2.1,<3.0.0; python_version>="2.7"
nose==1.3.7
mock==1.3.0
wheel==0.24.0
docutils>=0.10
behave==1.2.5
-e git://github.com/boto/jmespath.git@develop#egg=jmespath
jsonschema==2.5.1
urllib3>=1.20,<1.23; python_version=="3.3"
urllib3>=1.20,<1.24; python_version=="2.6"
urllib3>=1.20,<1.25; python_version=="2.7"
urllib3>=1.20,<1.25; python_version>="3.4"

#setup.py
from setuptools import setup, find_packages


requires = ['jmespath>=0.7.1,<1.0.0',
            'docutils>=0.10']


if sys.version_info[:2] == (2, 6):
    requires.append('python-dateutil>=2.1,<3.0.0')

    requires.append('urllib3>=1.20,<1.25')
"
}
unset -f _fn_foobar

set -u
_pyver="python"
_pybase='botocore'
pkgname="${_pyver}-${_pybase}-git"
pkgver=1.12.156.r5778.g260c6c8b
pkgrel=1
pkgdesc='A low-level interface to a number of Amazon Web Services. This is the foundation for the AWS CLI as well as boto3'
arch=('any')
url="https://github.com/boto/${_pybase}"
license=('Apache') # Apache License 2.0
_pydepends=( # See setup.py, README.rst, and requirements.txt for version dependencies
  "${_pyver}-bcdoc<0.15.0"    # AUR
  "${_pyver}-wheel>=0.24.0"   # AUR ==
  "${_pyver}-jmespath"{'>=0.7.1','<1.0.0'} # AUR == is possible for repositories. Makes upgrades impossible in AUR.
  "${_pyver}-jsonschema>=2.5.1"            # COM
  "${_pyver}-tox"{'>=2.5.0','<3.0.0'}      # COM == is possible because this is from a repository. Unfortunatley Arch isn"t the primary dev environment for botocore/aws so our packages are likely to be newer.
  "${_pyver}-dateutil"{'>=2.1','<3.0.0'}   # COM
  "${_pyver}-nose>=1.3.7"     # COM ==
  "${_pyver}-mock>=1.3.0"     # COM ==
  "${_pyver}-docutils>=0.10"  # COM
  "${_pyver}-six>=1.1.0"      # COM This is in the sources but I'm not sure where the version comes from.
  # requirements-docs.txt
  "${_pyver}-sphinx>=1.1.3" #"${_pyver}-sphinx"{>=1.1.3,<1.3}     # COM Arch is already newer. Documentation might not work.
  "${_pyver}-guzzle-sphinx-theme"{'>=0.7.10','<0.8'}
  "${_pyver}-behave>=1.2.5"
  "${_pyver}-urllib3"{'>=1.20','<1.25'}
)
depends=("${_pyver}" "${_pydepends[@]}")
makedepends=("${_pyver}" "${_pyver}-distribute") # same as python-setuptools
options=('!strip')
source=("${_pybase}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz")
sha256sums=('990db33e04e0dbad8b652b8be3558403d12074a5c9276a34fe3977d1702dbb91')

if [ "${pkgname%-git}" != "${pkgname}" ]; then # this is easily done with case
  _srcdir="${_pybase}"
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
  _srcdir="${_pybase}-${pkgver}"
  _verwatch=("${url}/releases" "${url#*github.com}/archive/\(.*\)\.tar\.gz" 'l')
fi

build() {
  set -u
  cd "${_srcdir}"
  ${_pyver} setup.py build
  set +u
}

check() {
  set -u
  cd "${_srcdir}"
  # If pip is installed, some package tests download missing packages. We can't allow that.
  #${_pyver} setup.py test --verbose
  set +u
}

package() {
  set -u
  #depends=("${_pyver}" "${_pydepends[@]}")
  cd "${_srcdir}"
  ${_pyver} setup.py install --root="${pkgdir}" --optimize=1
  install -Dpm644 'README.rst' 'requirements.txt' -t "${pkgdir}/usr/share/doc/${pkgname%-git}/"
  install -Dpm644 'LICENSE.txt' "${pkgdir}/usr/share/licenses/${pkgname%-git}/LICENSE"
  set +u
}
set +u

# vim:set ts=2 sw=2 et:
