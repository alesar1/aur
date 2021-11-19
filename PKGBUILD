# Maintainer: Paul Taylor <bao7uo at gmail dot com>
# Contributer: GI_Jack <GI_Jack@hackermail.com>
# Contributer: ArchStrike <team@archstrike.org>

pkgname=crackmapexec
_pkgname=CrackMapExec
pkgver=5.1.7dev
_pkgver=5.1.6.dev0
pkgrel=4
pkgdesc='A swiss army knife for pentesting Windows/Active Directory environments'
arch=('any')
url='https://github.com/byt3bl33d3r/CrackMapExec'
license=('GPL3')
depends=('impacket' 'python' 'python-aiowinreg' 'python-asn1crypto'
	 'python-asysocks' 'python-bcrypt' 'python-beautifulsoup4' 'python-bs4'
	 'python-certifi' 'python-cffi' 'python-chardet' 'python-click'
	 'python-cryptography' 'python-dnspython' 'python-flask' 'python-future'
	 'python-greenlet' 'python-idna' 'python-itsdangerous' 'python-jinja'
	 'python-ldap3' 'python-ldapdomaindump' 'python-lsassy'
	 'python-markupsafe' 'python-minidump' 'python-minikerberos'
	 'python-msgpack' 'python-msldap' 'python-netaddr' 'python-ntlm-auth'
	 'python-paramiko' 'python-prompt_toolkit' 'python-pyasn1'
	 'python-pycparser' 'python-pycryptodomex' 'python-pylnk303'
	 'python-pynacl' 'python-pyopenssl' 'python-pypsrp' 'python-pypykatz'
	 'python-pyspnego' 'python-pytz' 'python-requests-ntlm' 'python-six'
	 'python-soupsieve' 'python-termcolor' 'python-terminaltables'
	 'python-tqdm' 'python-urllib3' 'python-wcwidth' 'python-werkzeug'
	 'python-winacl' 'python-winsspi' 'python-xmltodict' 'python-zope-event'
	 'python-zope-interface' 'python-pywerview' 'python-gevent' 'python-neo4j'
	 'python-aioconsole')

makedepends=('python-setuptools' 'python-poetry')
source=("${url}/archive/v${pkgver}.tar.gz")
sha512sums=('3b4be83d30d58908f0828adb3b64aea608eb40ca21a9f9d3f69289f4be976ba9933990de6db46801ec3318ce93879af9ae30ed4bd3bcbbe0cbec748c82af4f11')

prepare() {
  cd $_pkgname-$pkgver
  make clean
}

build() {
  cd $_pkgname-$pkgver
  poetry build
  cd dist
  tar zxvf "${pkgname}-${_pkgver}.tar.gz"
}

package() {
  cd $_pkgname-$pkgver
  cd "dist/${pkgname}-${_pkgver}"
  python setup.py install --root=${pkgdir} --optimize=1
 
  # Needed to operate:
  install -d "${pkgdir}/usr/lib/python3.9/site-packages/cme/thirdparty/pywerview/"
  touch "${pkgdir}/usr/lib/python3.9/site-packages/cme/thirdparty/pywerview/.default"
  # Install the license
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
 
}

