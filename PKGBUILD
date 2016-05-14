# Maintainer: Lukasz Pozarlik <lpozarlik@gmail.com>
# Contributor: Duy Truong <jimreynold2nd@yahoo.com>

pkgbase=python-jira
pkgname=('python-jira'
  'python2-jira')
pkgdesc="Python library for interacting with JIRA via REST APIs"
pkgver=1.0.3
pkgrel=4
url="https://pypi.python.org/pypi/jira"
license=('BSD')
arch=('any')
source=("https://pypi.python.org/packages/2.7/j/jira/jira-${pkgver}-py2.py3-none-any.whl"
  'client.patch')
makedepends=('python-pip'
  'python2-pip')
md5sums=('a4eb7a250cd8fc2adb00e2245a68a528'
  'cad99b6b79027699605b3a626e49f085')

prepare(){
  patch -p1 -i "${srcdir}/client.patch"
  cd "${srcdir}"
  mv jira-${pkgver}.dist-info jira_patched-${pkgver}.dist-info
  zip jira_patched-${pkgver}-py2.py3-none-any.whl jira/* jira_patched-${pkgver}.dist-info/*
}

package_python-jira(){
makedepends=('python-pip')
  depends=('python'
  'python-requests'
  'python-six'
  #'python-tlslite'
  'python-requests-toolbelt'
  'python-requests-oauthlib'
  'python-oauthlib')
  pip install --no-deps --target "${pkgdir}/usr/lib/python3.5/site-packages" "${srcdir}/jira_patched-${pkgver}-py2.py3-none-any.whl"
}


package_python2-jira(){
  makedepends=('python2-pip')
  depends=('python2'
  'python2-requests'
  'python2-six'
  'python2-tlslite'
  'python2-requests-toolbelt'
  'python2-requests-oauthlib'
  'python2-oauthlib')
  pip2 install --no-deps --target "${pkgdir}/usr/lib/python2.7/site-packages" "${srcdir}/jira_patched-${pkgver}-py2.py3-none-any.whl"
}

