# Maintainer: Jingbei Li <i@jingbei.li>
# Contributor: Andrea Fagiani <andfagiani_at_gmail_dot_com>
# Contributor: solarus <in01-archlinux at tunna.org>
pkgname=eclim
pkgver=2.8.0
pkgrel=3
pkgdesc="Brings Eclipse functionality to Vim"
url="http://eclim.org/"
license=('GPL3')
arch=(i686 x86_64)
makedepends=('apache-ant' 'eclipse' 'groovy' 'java-environment=10' 'libnsl' 'python2-sphinx' 'python2-docutils' 'vim')
optdepends=('eclipse-dltk-core')
conflicts=('eclim-git')
install=$pkgname.install
source=("https://github.com/ervandew/eclim/releases/download/$pkgver/${pkgname}_$pkgver.tar.gz")
md5sums=('aae873ee270d6c7b21a6ff3bec3f08ad')

prepare() {
  cd $srcdir/${pkgname}_$pkgver

  # fix build, thanks to mikezackles
  sed -e "s/'sphinx-build'/'sphinx-build2'/g" \
    -e 's|${user.home}/\.|${vim.files}/|g' \
    -e "s|File(getVariable('eclipse')|File('/usr/lib/eclipse/'|g" \
    -e '68,88d' \
    -i ant/build.gant

  export ANT_HOME=/usr/share/ant
  export PATH=$PATH:$ANT_HOME/bin
  export JAVA_HOME=/usr/lib/jvm/java-10-openjdk
  export ANT_OPTS="--add-modules java.xml.bind"

  chmod +x org.eclim/nailgun/configure bin/sphinx

  # Sphinx 1.6 => 1.7 compatibility issue
  sed 's|sphinx.util.compat|docutils.parsers.rst|' -i doc/extension/plantuml.py

  # ant/build.gant syntax error
  sed '68,71d' -i ant/build.gant

  # https://github.com/ervandew/eclim/issues/601
  find -name "*.java" -exec sed -i -e 's/StubUtility2/StubUtility2Core/' \
    -e 's/corext.codemanipulation.StubUtility;/core.manipulation.StubUtility;/' {} +
}

build() {
  cd $srcdir/${pkgname}_$pkgver

  # recompiling nailgun to make sure the executable is compliant with our architecture
  cd org.eclim/nailgun
  ./configure
  make

  cd ../..

  ant -lib /usr/share/groovy/lib \
      -Declipse.home=/usr/lib/eclipse \
      -Dvim.files=/usr/share/vim/vimfiles \
      -Dfile.encoding=utf-8 \
      build
}

package() {
  depends=('eclipse' 'java-environment' 'libnsl' 'vim')

  cd $srcdir/${pkgname}_$pkgver

  mkdir -p $pkgdir/usr/lib/eclipse
  mkdir -p $pkgdir/usr/share/vim/vimfiles

  ant -lib /usr/share/groovy/lib \
      -Declipse.home=/usr/lib/eclipse \
      -Dvim.files=$pkgdir/usr/share/vim/vimfiles \
      docs vimdocs

  ant -lib /usr/share/groovy/lib \
      -Declipse.home=$pkgdir/usr/lib/eclipse \
      -Dvim.files=$pkgdir/usr/share/vim/vimfiles \
      deploy

  # copy eclim docs
  mkdir -p $pkgdir/usr/share/doc/
  cp -r build/doc/site $pkgdir/usr/share/doc/eclim

  # fix eclim paths
  sed -e "s|$pkgdir||g" \
    -i $pkgdir/usr/share/vim/vimfiles/eclim/plugin/eclim.vim \
    -i $pkgdir/usr/lib/eclipse/plugins/org.eclim_$pkgver/bin/eclimd \
    -i $pkgdir/usr/lib/eclipse/plugins/org.eclim_$pkgver/plugin.properties

  # delete doctrees
  rm -fr $pkgdir/usr/share/doc/eclim/.doctrees

  # delete Windows stuff
  for i in $(find $pkgdir -regex ".*bat\|.*cmd\|.*exe"); do  rm -f $i ; done

  rm $pkgdir/usr/lib/eclipse/plugins/org.eclim_${pkgver}/nailgun/config.status
}
