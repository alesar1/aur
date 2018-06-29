# Maintainer: Cedric Girard <girard.cedric@gmail.com>
# Contributor: G. Richard Bellamy <rbellamy@pteradigm.com>
# Contributor: Andrea Repetto <andrea.repetto85@gmail.com>
# Contributor: Bogdan Szczurek <thebodzio@gmail.com>

pkgname=flexget-git
_pkgname=Flexget
pkgver=2.14.2.r13156.1f8badaec
pkgrel=1

pkgdesc="Automate downloading or processing content (torrents, podcasts, etc.) from different sources like RSS-feeds, html-pages, various sites and more."

arch=('any')
url="http://flexget.com/"
license=('MIT')

depends=('python'
         # documented in requirements.in
         'python-feedparser>=5.2.1'
         'python-sqlalchemy>=1.0.9'
         'python-sqlalchemy<1.999'
         'python-yaml'
         'python-beautifulsoup4>=4.5'
         'python-html5lib>=0.11'
         'python-pyrss2gen'
         'python-pynzb'
         'python-rpyc=3.3.0'
         'python-jinja'
         'python-requests>=2.16.3'
         'python-dateutil>=2.5.3'
         'python-jsonschema>=2.0'
         'python-path>=8.1.1'
         'python-pathlib>=1.0'
         'python-guessit<=2.1.4'
         'python-rebulk=0.9.0'
         'python-apscheduler>=3.2.0'
         'python-terminaltables>=3.1.0'
         'python-colorclass>=2.2.0'
         # https://archive.archlinux.org/packages/p/python-cherrypy/python-cherrypy-11.0.0-5-any.pkg.tar.xz
         'python-cherrypy>=3.7.0'
         'python-cherrypy<12'
         'python-flask>=0.7'
         'python-flask-restful>=0.3.3'
         'python-flask-restplus=0.10.1'
         'python-flask-compress>=1.2.1'
         'python-flask-login>=0.4.0'
         'python-flask-cors>=2.1.2'
         'python-pyparsing>=2.0.3'
         'python-zxcvbn'
         'python-future>=0.15.2'
         )
optdepends=('python-guppy: for memusage plugin' #AUR#
            'python-transmissionrpc: Transmission support' #AUR#
            'python-rarfile: decompress plugin' #AUR#
            'python-boto3: SNS output plugin' #AUR#
            )
makedepends=('python-paver'
             'python-setuptools'
             'yarn'
             'bower'
             'gulp'
             )

#checkdepends=('python-vcr')

provides=('flexget')
conflicts=('flexget')

source=('git+https://github.com/Flexget/Flexget'
        'flexget.service'
        'flexget@.service'
        )

sha256sums=('SKIP'
            'e2c3a958ed0c286337cd37fba1d6cbdf4306c57fcddf2b9cc43615ce80ae83aa'
            '5fca3a1b6be282c0914754bbfdeef21005d936fba3d2698801bba18369e1321a')

pkgver() {
  cd Flexget
  printf "%s.r%s.%s" "$(grep __version__ flexget/_version.py | sed -r "s/.*([0-9].*\.[0-9].*\.[0-9].*)\.dev.*/\1/g")" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${_pkgname}"


  #pip-compile --output-file requirements.txt requirements.in
  #pip-compile give too stricts requirements...
  cp requirements.in requirements.txt
  #flexget works fine with newer versions of requests
  sed -i 's!requests~=2.16.3!requests>=2.16.3!' requirements.txt
  #zxcvbn-python has been renamed zxcvbn
  sed -i 's!zxcvbn-python!zxcvbn!' requirements.txt
}

build() {
  cd "${_pkgname}"/flexget/ui/v1
  yarn
  XDG_CONFIG_HOME="${_srcdir}" bower --config.analytics=false install
  XDG_CONFIG_HOME="${_srcdir}" gulp

}

#check() {
#  cd "${_pkgname}"
#
#  python2 setup.py test
#}

package() {
  cd "${_pkgname}"

  # Python setup
  python setup.py install --root="${pkgdir}"/ --prefix=/usr --optimize=1 || return 1

  # License
  install -Dm644 LICENSE "${pkgdir}"/usr/share/licenses/"${pkgname}"/LICENSE

  # Make sure the perms allow reading by all
  chmod ugo+r ${pkgdir}/usr/lib/python3.6/site-packages/FlexGet-2.14.*.dev0-py3.6.egg-info/*

  # install systemd user unit
  install -Dm644 ../flexget.service "${pkgdir}"/usr/lib/systemd/user/flexget.service
  # install systemd system unit
  install -Dm644 ../flexget@.service "${pkgdir}"/usr/lib/systemd/system/flexget@.service
}

# vim:set ts=2 sw=2 et:
