import re
from itertools import chain
from os.path import basename
from os.path import dirname
from os.path import join
from os.path import splitext
from distutils.core import setup
from distutils.command.build import build
from setuptools.command.develop import develop
from setuptools.command.easy_install import easy_install
from setuptools.command.install_lib import install_lib


class BuildWithPTH(build):
    def run(self):
        build.run(self)
        path = join(dirname(__file__), 'better_exceptions_hook.pth')
        dest = join(self.build_lib, basename(path))
        self.copy_file(path, dest)


class EasyInstallWithPTH(easy_install):
    def run(self):
        easy_install.run(self)
        path = join(dirname(__file__), 'better_exceptions_hook.pth')
        dest = join(self.install_dir, basename(path))
        self.copy_file(path, dest)


class InstallLibWithPTH(install_lib):
    def run(self):
        install_lib.run(self)
        path = join(dirname(__file__), 'better_exceptions_hook.pth')
        dest = join(self.install_dir, basename(path))
        self.copy_file(path, dest)
        self.outputs = [dest]

    def get_outputs(self):
        return chain(install_lib.get_outputs(self), self.outputs)


class DevelopWithPTH(develop):
    def run(self):
        develop.run(self)
        path = join(dirname(__file__), 'better_exceptions_hook.pth')
        dest = join(self.install_dir, basename(path))
        self.copy_file(path, dest)


with open('better_exceptions/__init__.py', 'r') as file:
    version = re.search(r'^__version__\s*=\s*[\'"]([^\'"]*)[\'"]',
                        file.read(), re.MULTILINE).group(1)

with open('README.rst', 'rb') as file:
    readme = file.read().decode('utf-8')

setup(
    name = 'better_exceptions_fork',
    packages = ['better_exceptions', 'better_exceptions_fork'],
    package_dir = {'better_exceptions_fork': 'better_exceptions'},
    version = version,
    description = 'Pretty and helpful exceptions, automatically',
    long_description = readme,
    author = 'Josh Junon',
    author_email = 'josh@junon.me',
    maintainer = 'Delgan',
    maintainer_email = 'delgan.py@gmail.com',
    url = 'https://github.com/delgan/better-exceptions',
    download_url = 'https://github.com/delgan/better-exceptions/archive/{}.tar.gz'.format(version),
    keywords = ['pretty', 'better', 'exceptions', 'exception', 'error', 'local', 'debug', 'debugging', 'locals'],
    classifiers = [],
    install_requires = [
        'ansimarkup>=1.3.0',
        'pygments>=2.2.0',
    ],
    extras_require = {
        ':sys_platform=="win32"': ['colorama']
    },
    # This all comes from pytest-cov repository:
    # https://github.com/pytest-dev/pytest-cov/blob/cde7c378b6a1971957759f42ac91e2860b41cf89/setup.py
    cmdclass = {
        'build': BuildWithPTH,
        'easy_install': EasyInstallWithPTH,
        'install_lib': InstallLibWithPTH,
        'develop': DevelopWithPTH,
    }
)
