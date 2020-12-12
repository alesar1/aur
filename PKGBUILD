# Maintainer:  Chris Severance aur.severach aATt spamgourmet dott com
# Contributor: Douglas Creager (dcreager AT dcreager DOT NET)
# Contributor: Josh David Miller (josh AT joshdavidmiller DOT COM)
# Contributor: David Pretty (david DOT pretty AT gmail DOT COM)
# Contributor: Johannes Zellner (johannes AT nebulon DOT DE)

# Unlike aws-cli which allows >= versions, this package checks and crashes
# if the exact == and < versions aren't installed.
# To build these, download the packages from the AUR or ABS and change the version.

set -u
_pyver="python"
_pybase='aws-eb-cli'
if [ "${_pyver}" = 'python' ]; then
pkgname="${_pybase}"
_pyverother='python2-'
else
pkgname="${_pyver}-${_pybase}"
_pyverother='' #python-'
fi
_pybasend="${_pybase//-/}"
pkgver='3.19.2'
pkgrel='1'
pkgdesc='The API and CLI tools that provide access to Amazon Elastic Beanstalk awsebcli'
arch=('any')
#url='http://aws.amazon.com/code/6752709412171743'
url="https://pypi.python.org/pypi/${_pybasend}"
license=('Apache') # Apache License 2.0
makedepends=("${_pyver}" "${_pyver}-distribute") # same as python-setuptools
_srcdir="${_pybasend}-${pkgver}"
_verwatch=("https://pypi.org/simple/${_pybasend}/" "${_pybasend}-\([0-9\.]\+\)\.tar\.gz" 't')
# https://bitbucket.org/pypa/pypi/issues/438/backwards-compatible-un-hashed-package
# https://bitbucket.org/pypa/pypi/issues/447/direct-links-of-packages-gone
source=("https://files.pythonhosted.org/packages/source/${_pybasend: 0:1}/${_pybasend}/${_pybasend}-${pkgver}.tar.gz")
md5sums=('17c706cf1d2f40ad5809aacabb498464')
sha256sums=('bd5221c26b3c7eb64597c6ae03b76c2025ed210e68d3702819bdfa1afb015230')

# Convert python requires to PKGBUILD depends
# $1: prefix python- or python2-
# $2: space separated list of packages to drop < or <=: 'foo bar'
#   (because our packages are often too new)
# $3: what to convert == to: '>=' or '='
# returns array _pydepends=()
_fn_pydepends() {
  # Paste in from setup.py. This function does NOT work in zsh.
local _requires="
requires = [
    'botocore>=1.19.0,<1.20.0',
    'cement==2.8.2',
    'colorama>=0.2.5,<0.4.4',  # use the same range that 'docker-compose' uses
    'future>=0.16.0,<0.17.0',
    'pathspec==0.5.9',
    'python-dateutil>=2.1,<3.0.0',  # use the same range that 'botocore' uses
    'requests>=2.20.1,<=2.24',
    'setuptools >= 20.0',
    'semantic_version == 2.5.0',
    'six>=1.12.0,<=1.15.0',
    'termcolor == 1.1.0',
    'wcwidth>=0.1.7,<0.2.0',
    #found further down in setup.py
    'PyYAML>=5.3.1,<5.4',  # use the same range that 'aws-cli' uses. This is also compatible with 'docker-compose'
    'urllib3>=1.25.4,<1.26',
    # use the same ranges as 'docker-py':
    'docker-compose >= 1.25.2, < 1.26.0',
    'blessed>=1.9.5',
    #Part of Botocore
    #'docutils<0.16,>=0.10'
]
"
  # Convert requires=[] to local _requires=()
  _requires="${_requires//requires = \[/local _requires=(}"
  _requires="${_requires//\]/)}"
  eval "${_requires}"
  _requires=("${_requires[@]// /}")    # embedded spaces
  _requires=("${_requires[@]%,}")      # trailing commas
  _requires=("${_requires[@]//==/$3}") # translate ==
  _requires=("${_requires[@]#python-}") # remove leading python-
  local _pynoless=" $2 "               # we can search for ' foo '
  _pydepends=()
  local _pyst1
  for _pyst1 in "${_requires[@]}"; do # foo>=0.0,<=0.0
    _pyst1="${_pyst1,,}"
    local _pyname="${_pyst1%%[<=>]*}" # foo
    _pyst1="${_pyst1#${_pyname}}"     # >=0.0,<=0.0
    local IFS=','
    local _pyst2=(${_pyst1})          # (>=0.0 <=0.0)
    _pyst2=("${_pyst2[@]/#/$1${_pyname}}") # (foo>=0.0 foo<=0.0)
    local _pystn
    for _pystn in "${!_pyst2[@]}"; do
      if [[ "${_pyst2[${_pystn}]}" == *\<* ]] && [ "${_pynoless// ${_pyname} /}" != "${_pynoless}" ]; then
        unset _pyst2[${_pystn}]
      fi
    done
    _pydepends+=("${_pyst2[@]}")
  done
}
_fn_pydepends "${_pyver}-" '' '='
# vercmp doesn't consider 2.4 and 2.4.0 equal
#_pydepends=("${_pydepends[@]//-cement=2.4/-cement=2.4.0}")
#Arch drops the py prefix on pyyaml
_pydepends=("${_pydepends[@]//-pyyaml/-yaml}")
_pydepends=("${_pydepends[@]//python-docker-compose/docker-compose}")
_pydepends+=('docker>=3.3.0' "${_pyver}-requests>=2.14.2")
unset -f _fn_pydepends

build() {
  set -u
  cd "${_srcdir}"
  ${_pyver} setup.py build
  # Fix the location of the dev tools
  #sed -i 's/LinuxClimbUpDepth\s=.*$/LinuxClimbUpDepth = 0/g' \
  #  ${srcdir}/AWS-ElasticBeanstalk-CLI-${pkgver}/eb/linux/python3/scli/constants.py
  #sed -i 's/LinuxRepoScript\s=.*$/LinuxRepoScript = \x27AWSDevTools\/AWSDevTools-RepositorySetup.sh\x27/g' \
  #  ${srcdir}/AWS-ElasticBeanstalk-CLI-${pkgver}/eb/linux/python3/scli/constants.py
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
  depends=("${_pyver}" "${_pydepends[@]}")
  conflicts=("${_pyverother}${_pybase}")
  cd "${_srcdir}"
  ${_pyver} 'setup.py' install --root "${pkgdir}"
  install -Dpm644 'LICENSE.txt' "${pkgdir}/usr/share/licenses/${pkgname%-git}/LICENSE"

  # Install the files into /opt since they depend on a non-standard directory
  # structure.
  #mkdir -p ${pkgdir}/opt
  #cp -r ${srcdir}/AWS-ElasticBeanstalk-CLI-${pkgver}/eb/linux/python3 ${pkgdir}/opt/aws-eb-cli
  #cp -r ${srcdir}/AWS-ElasticBeanstalk-CLI-${pkgver}/AWSDevTools/Linux ${pkgdir}/opt/aws-eb-cli/AWSDevTools

  # Link the CLI program into /usr/bin
  #mkdir -p ${pkgdir}/usr/bin
  #ln -s ../../opt/aws-eb-cli/eb ${pkgdir}/usr/bin
  set +u
}
set +u
# vim:set ts=2 sw=2 et:
